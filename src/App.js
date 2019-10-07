import React from 'react';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import { configureStore } from './store';

import './App.css';
import './index.css';
import MainPage from './containers/MainPage/index';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
