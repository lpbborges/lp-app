import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CustomerItem,
  Name,
  PhoneNumber,
  NewCustomerButton,
} from './styles';

const data = [
  {
    id: '1',
    name: 'John Doe',
    phone: '17998547912',
  },
  {
    id: '2',
    name: 'John Doe',
    phone: '17998547912',
  },
  {
    id: '3',
    name: 'John Doe',
    phone: '17998547912',
  },
  {
    id: '4',
    name: 'John Doe',
    phone: '17998547912',
  },
  {
    id: '12',
    name: 'John Doe',
    phone: '17998547912',
  },
  {
    id: '22',
    name: 'John Doe',
    phone: '17998547912',
  },
  {
    id: '31',
    name: 'John Doe',
    phone: '17998547912',
  },
  {
    id: '41',
    name: 'John Doe',
    phone: '17998547912',
  },
];

const MyCustomers: React.FC = () => {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item: customer }) => (
          <CustomerItem
            android_ripple={{
              color: '#6f4fa2',
            }}
          >
            <Name>{customer.name}</Name>
            <PhoneNumber>{customer.phone}</PhoneNumber>
          </CustomerItem>
        )}
        keyExtractor={item => item.id}
      />
      <NewCustomerButton>
        <Icon name="add" color="#fff" size={26} />
      </NewCustomerButton>
    </Container>
  );
};

export default MyCustomers;
