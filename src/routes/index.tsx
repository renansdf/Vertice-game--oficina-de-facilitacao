import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rules from '../pages/Rules';
import Configs from '../pages/Configs';
import Board from '../pages/Board';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Rules} />
    <Route path="/configuracoes" component={Configs} />
    <Route path="/board" component={Board} />
  </Switch>
);

export default Routes;
