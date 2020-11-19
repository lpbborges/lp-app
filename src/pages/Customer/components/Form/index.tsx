import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { v4 as uuidv4 } from 'uuid';
import Realm from 'realm';
import { MaskService, TextInputMaskOptionProp } from 'react-native-masked-text';
import * as Yup from 'yup';

import { HelperText, Snackbar } from 'react-native-paper';
import Customer from '../../../../entities/Customer';
import getRealm from '../../../../services/realm';
import {
  Container,
  Content,
  InputContainer,
  Input,
  ConcludeButton,
  CancelButton,
} from './styles';
import getValidationErrors from '../../../../utils/getValidationErrors';

interface FormProps {
  customer?: Customer;
}

interface ErrorsProps {
  name: string;
  email: string;
  telephone: string;
}

const maskProps: TextInputMaskOptionProp = {
  maskType: 'BRL',
  withDDD: true,
  dddMask: '(99)',
};

const Form: React.FC<FormProps> = ({ customer }) => {
  const emailRef = useRef<TextInput>(null);
  const telephoneRef = useRef<TextInput>(null);
  const [showSnack, setShowSnack] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [errors, setErrors] = useState<ErrorsProps>({} as ErrorsProps);
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

      setErrors({ ...errors, telephone: '' });
      setTelephone(value);
    },
    [errors, toMask],
  );

  const handleInputChange = useCallback(
    (
      inputName: string,
      text: string,
      setValue: React.Dispatch<React.SetStateAction<string>>,
    ) => {
      setValue(text);
      setErrors({ ...errors, [inputName]: '' });
    },
    [errors],
  );

  const handleConcludeButton = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido'),
        telephone: Yup.string()
          .min(10, 'Telefone inválido')
          .max(11, 'Telefone inválido')
          .required(),
      });

      const data = {
        id: customer ? customer.id : uuidv4(),
        name,
        email,
        telephone: toRawValue('cel-phone', telephone),
      };

      await schema.validate(data, { abortEarly: false });

      const realm = await getRealm();

      realm.write(() => {
        realm.create('Customer', data, Realm.UpdateMode.Modified);
      });

      setShowSnack(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const error = getValidationErrors(err) as ErrorsProps;
        setErrors(error);
        return;
      }

      Alert.alert(
        `Falha ao ${customer ? 'atualizar' : 'criar'} cliente`,
        `Ocorreu um erro ao ${
          customer ? 'atualizar' : 'criar'
        } o cliente, verifique e tente novamente`,
      );
    }
  }, [customer, email, name, telephone, toRawValue]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Content>
            <InputContainer>
              <Input
                value={name}
                label="Nome"
                isErrored={!!errors.name}
                returnKeyType="next"
                onFocus={() => setErrors({ ...errors, name: '' })}
                onSubmitEditing={() => {
                  if (emailRef.current) emailRef.current.focus();
                }}
                onChangeText={text => handleInputChange('name', text, setName)}
              />
              <HelperText
                visible={!!errors.name}
                type="error"
                style={styles.errorText}
              >
                {errors.name}
              </HelperText>
            </InputContainer>
            <InputContainer>
              <Input
                ref={emailRef}
                value={email}
                label="Email"
                isErrored={!!errors.email}
                returnKeyType="next"
                onFocus={() => setErrors({ ...errors, email: '' })}
                onSubmitEditing={() => {
                  if (telephoneRef.current) telephoneRef.current.focus();
                }}
                onChangeText={text =>
                  handleInputChange('email', text, setEmail)
                }
              />
              <HelperText
                style={styles.errorText}
                visible={!!errors.email}
                type="error"
              >
                {errors.email}
              </HelperText>
            </InputContainer>
            <InputContainer>
              <Input
                ref={telephoneRef}
                value={telephone}
                label="Telefone"
                isErrored={!!errors.telephone}
                returnKeyType="done"
                onFocus={() => setErrors({ ...errors, telephone: '' })}
                onChangeText={handleTelephoneInputChange}
              />
              <HelperText
                style={styles.errorText}
                visible={!!errors.telephone}
                type="error"
              >
                {errors.telephone}
              </HelperText>
            </InputContainer>
          </Content>
          <ConcludeButton onPress={handleConcludeButton} mode="contained">
            Concluir
          </ConcludeButton>
          <CancelButton onPress={() => goBack()} mode="outlined">
            Cancelar
          </CancelButton>
        </Container>
        <Snackbar
          visible={showSnack}
          onDismiss={() => setShowSnack(false)}
          style={styles.snackSuccess}
          theme={{
            colors: {
              accent: '#fff',
            },
          }}
          action={{
            label: 'Voltar',
            onPress: () => goBack(),
          }}
        >
          {`Cliente ${customer ? 'atualizado' : 'criado'}`}
        </Snackbar>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  snackSuccess: {
    backgroundColor: '#32cd32',
  },
  errorText: {
    color: '#FF7474',
  },
};

export default Form;
