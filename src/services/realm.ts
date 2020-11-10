import Realm from 'realm';

import CustomerSchema from '../schemas/CustomerSchema';

export default function getRealm() {
  return Realm.open({
    schema: [CustomerSchema],
  });
}
