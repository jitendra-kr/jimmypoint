import React from 'react';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
    <Router history={createHistory()}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>,
    document.getElementById('root'),
  );
