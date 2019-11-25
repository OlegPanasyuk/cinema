import React from 'react';
import { Provider } from 'react-redux';

import AuthComponent from '../../components/AuthComponent';
import { configureStore } from '../../store';

const store = configureStore();

function ApplicationInit() {
  return (
    <Provider store={store}>
      <AuthComponent />
    </Provider>
  );
}

export default ApplicationInit;
