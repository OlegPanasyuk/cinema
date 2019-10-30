import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'antd/dist/antd.css';
import { configureStore } from './store';

import './App.css';
import './index.css';
import MainPage from './containers/MainPage/index';
import Film from './components/Film/index';

const store = configureStore();
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" history={history} component={MainPage} />
          <Route path="/film/:id" history={history} component={Film} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
