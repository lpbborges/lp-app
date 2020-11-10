import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import getRealm from '../../../services/realm';
import Customer from '../../../entities/Customer';

import Form from '../components/Form';

interface RouteParams {
  id: string;
}

const EditCustomer: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>();
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  useEffect(() => {
    async function loadCustomer() {
      const realm = await getRealm();

      const data = realm.objectForPrimaryKey<Customer>(
        'Customer',
        routeParams.id,
      );

      if (data) {
        setCustomer(data);
      }
    }

    loadCustomer();
  }, [routeParams.id]);

  return <Form customer={customer} />;
};

export default EditCustomer;
