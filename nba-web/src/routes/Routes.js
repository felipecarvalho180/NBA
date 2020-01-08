
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Team from '../pages/team/Team';
import Teams from '../pages/teams/Teams';
import Standing from '../pages/standing/Standing';
import Schedule from '../pages/schedule/Schedule';

export default function Routes() {
  return (
    <Switch>
      <Route path='/team' component={ Team } />
      <Route path='/teams' component={ Teams } />
      <Route path='/standing' component={ Standing } />
      <Route path='/schedule' component={ Schedule } />
      <Redirect from='/' to='/teams'/>
    </Switch>
  );
}
