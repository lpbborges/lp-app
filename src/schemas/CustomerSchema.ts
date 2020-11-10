import Realm from 'realm';

const CustomerSchema: Realm.ObjectSchema = {
  name: 'Customer',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: { type: 'string', indexed: true },
    email: 'string',
    telephone: 'string',
    document: 'string?',
  },
};

export default CustomerSchema;
