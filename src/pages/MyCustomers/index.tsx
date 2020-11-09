import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Results } from 'realm';

import getRealm from '../../services/realm';

import {
  Container,
  CustomerItem,
  Name,
  PhoneNumber,
  NewCustomerButton,
} from './styles';

import Customer from '../../entities/Customer';

const MyCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Results<Customer>>();

  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadCustomers() {
      const realm = await getRealm();

      const data = realm.objects<Customer>('Customer').sorted('name', false);

      if (data) setCustomers(data);
    }

    loadCustomers();
  }, []);

  const navigateToCustomer = useCallback(() => {
    navigate('NewCustomer');
  }, [navigate]);

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={customers}
        renderItem={({ item: customer }) => (
          <CustomerItem
            android_ripple={{
              color: '#6f4fa2',
            }}
            onPress={() => navigate('EditCustomer', { id: customer.id })}
          >
            <Name>{customer.name}</Name>
            <PhoneNumber>{customer.telephone}</PhoneNumber>
          </CustomerItem>
        )}
        keyExtractor={item => item.id}
      />
      <NewCustomerButton onPress={navigateToCustomer}>
        <Icon name="add" color="#fff" size={26} />
      </NewCustomerButton>
    </Container>
  );
};

export default MyCustomers;
