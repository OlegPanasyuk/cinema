import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import { configureStore } from './store';

import './App.css';
import './index.css';
import MainPage from './containers/MainPage/index';
import Film from './components/Film/index';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/film/:id"  component={Film} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
