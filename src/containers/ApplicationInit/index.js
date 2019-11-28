import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthComponent from '../../components/AuthComponent';
import { configureStore } from '../../store';

const store = configureStore();

function ApplicationInit() {
  return (
    <Provider store={store}>
      <Router>
        <AuthComponent />
      </Router>
    </Provider>
  );
}

export default ApplicationInit;
