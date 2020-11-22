import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Results } from 'realm';
import { MaskService } from 'react-native-masked-text';
import { useTheme } from 'react-native-paper';

import { useSearch } from '../../hooks/search';

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
  const { toMask } = MaskService;
  const { query } = useSearch();
  const isFocused = useIsFocused();
  const { colors } = useTheme();

  useEffect(() => {
    async function getFilteredCustomers() {
      const realm = await getRealm();

      const data = realm
        .objects<Customer>('Customer')
        .filtered(`name BEGINSWITH "${query}"`)
        .sorted('name', false);

      if (data) setCustomers(data);
    }

    getFilteredCustomers();
  }, [query, isFocused]);

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
              color: colors.accent,
            }}
            onPress={() => navigate('EditCustomer', { id: customer.id })}
          >
            <Name color={colors.text}>{customer.name}</Name>
            <PhoneNumber color={colors.subText}>
              {toMask('cel-phone', customer.telephone, {
                maskType: 'BRL',
                dddMask: '(99)',
                withDDD: true,
              })}
            </PhoneNumber>
          </CustomerItem>
        )}
        keyExtractor={item => item.id}
      />
      <NewCustomerButton onPress={navigateToCustomer} color={colors.accent}>
        <Icon name="add" color={colors.text} size={26} />
      </NewCustomerButton>
    </Container>
  );
};

export default MyCustomers;
