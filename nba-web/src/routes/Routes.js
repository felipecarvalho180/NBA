
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Teams from '../pages/teams/Teams';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/teams' component={ Teams } />
        <Redirect from='/' to='/teams'/>
      </Switch>
    </BrowserRouter>
  );
}
