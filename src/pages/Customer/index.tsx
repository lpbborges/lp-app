import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  Container,
  InputContainer,
  Input,
  ConcludeButton,
  CancelButton,
} from './styles';

const Customer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <InputContainer>
            <Input label="Nome" />
            <Input label="Email" />
            <Input label="Telefone" />
          </InputContainer>
          <ConcludeButton onPress={() => console.log('teste')} mode="contained">
            Concluir
          </ConcludeButton>
          <CancelButton onPress={() => navigate('MyCustomers')} mode="outlined">
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

export default Customer;
