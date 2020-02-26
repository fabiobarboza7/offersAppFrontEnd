import React, { useReducer } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Admin from './pages/Admin/Offers';
import EditOffer from './pages/Admin/EditOffer';
import NewOffer from './pages/Admin/NewOffer';
import history from './services/history';
import offersReducer from './store/offers/reducer';
import { Store } from './store';

const { Provider } = Store;

export default function Routes() {
  const store = useReducer(offersReducer);

  return (
    <Provider value={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route path="/admin/offers/edit/:id" component={EditOffer} />
          <Route path="/admin/offers/new" component={NewOffer} />
        </Switch>
      </Router>
    </Provider>
  );
}
