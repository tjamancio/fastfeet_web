import React from 'react';

import { Switch } from 'react-router-dom';

import Deliveryman from '~/pages/Deliveryman';
import Order from '~/pages/Order';
import Recipient from '~/pages/Recipient';
import SignIn from '~/pages/SignIn';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/orders" exact isPrivate component={Order} />
    <Route path="/deliverymen" exact isPrivate component={Deliveryman} />
    <Route path="/recipients" exact isPrivate component={Recipient} />
  </Switch>
);

export default Routes;
