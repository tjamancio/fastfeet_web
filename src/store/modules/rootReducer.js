import { combineReducers } from 'redux';

import auth from './auth/duck';
import delivery from './delivery/duck';
import deliveryman from './deliveryman/duck';
import recipient from './recipient/duck';
import user from './user/duck';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  auth,
  user,
  delivery,
  deliveryman,
  recipient,
});

export default reducers;
