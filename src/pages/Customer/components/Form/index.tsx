import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { v4 as uuidv4 } from 'uuid';
import Realm from 'realm';
import { MaskService, TextInputMaskOptionProp } from 'react-native-masked-text';

import Customer from '../../../../entities/Customer';
import getRealm from '../../../../services/realm';
import {
  Container,
  InputContainer,
  Input,
  ConcludeButton,
  CancelButton,
} from './styles';

interface FormProps {
  customer?: Customer;
}

const maskProps: TextInputMaskOptionProp = {
  maskType: 'BRL',
  withDDD: true,
  dddMask: '(99)',
};

const Form: React.FC<FormProps> = ({ customer }) => {
  const emailRef = useRef<TextInput>(null);
  const telephoneRef = useRef<TextInput>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const { goBack } = useNavigation();

  const { toMask, toRawValue } = MaskService;

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setEmail(customer.email);
      setTelephone(toMask('cel-phone', customer.telephone, maskProps));
    }
  }, [customer, toMask]);

  const handleTelephoneInputChange = useCallback(
    (text: string) => {
      const value = toMask('cel-phone', text, maskProps);

      setTelephone(value);
    },
    [toMask],
  );

  const handleConcludeButton = useCallback(async () => {
    try {
      const data = {
        id: customer ? customer.id : uuidv4(),
        name,
        email,
        telephone: toRawValue('cel-phone', telephone),
      };

      const realm = await getRealm();

      realm.write(() => {
        realm.create('Customer', data, Realm.UpdateMode.Modified);
      });

      Alert.alert(`Cliente ${customer ? 'atualizado' : 'criado'} com sucesso!`);

      goBack();
    } catch (err) {
      Alert.alert(
        `Falha ao ${customer ? 'atualizar' : 'criar'} cliente`,
        `Ocorreu um erro ao ${
          customer ? 'atualizar' : 'criar'
        } o cliente, verifique e tente novamente`,
      );
    }
  }, [customer, email, goBack, name, telephone, toRawValue]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <InputContainer>
            <Input
              value={name}
              label="Nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                if (emailRef.current) emailRef.current.focus();
              }}
              onChangeText={(text: string) => setName(text)}
            />
            <Input
              ref={emailRef}
              value={email}
              label="Email"
              returnKeyType="next"
              onSubmitEditing={() => {
                if (telephoneRef.current) telephoneRef.current.focus();
              }}
              onChangeText={(text: string) => setEmail(text)}
            />
            <Input
              ref={telephoneRef}
              onChangeText={handleTelephoneInputChange}
              value={telephone}
              label="Telefone"
              returnKeyType="done"
            />
          </InputContainer>
          <ConcludeButton onPress={handleConcludeButton} mode="contained">
            Concluir
          </ConcludeButton>
          <CancelButton onPress={() => goBack()} mode="outlined">
            Cancelar
          </CancelButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
};

export default Form;
