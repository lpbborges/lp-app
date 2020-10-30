import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
  );
};

export default Customer;
