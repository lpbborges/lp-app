import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { v4 as uuidv4 } from 'uuid';

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

const Form: React.FC<FormProps> = ({ customer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const { goBack } = useNavigation();

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setEmail(customer.email);
      setTelephone(customer.telephone);
    }
  }, [customer]);

  const handleConcludeButton = useCallback(async () => {
    try {
      const data = {
        id: customer ? customer.id : uuidv4(),
        name,
        email,
        telephone,
      };

      const realm = await getRealm();

      realm.write(() => {
        realm.create('Customer', data);
      });

      Alert.alert(`Cliente ${customer ? 'atualizado' : 'criado'}`);

      goBack();
    } catch (err) {
      Alert.alert(
        `Falha ao ${customer ? 'atualizar' : 'criar'} cliente`,
        `Ocorreu um erro ao ${
          customer ? 'atualizar' : 'criar'
        } o cliente, verifique e tente novamente`,
      );
    }
  }, [customer, email, goBack, name, telephone]);

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
              onChangeText={(text: string) => setName(text)}
            />
            <Input
              value={email}
              label="Email"
              returnKeyType="next"
              onChangeText={(text: string) => setEmail(text)}
            />
            <Input
              value={telephone}
              label="Telefone"
              returnKeyType="done"
              onChangeText={(text: string) => setTelephone(text)}
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
