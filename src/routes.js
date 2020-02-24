import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './pages/Admin/Offers';
import Edit from './pages/Admin/Edit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}
