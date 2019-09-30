import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import FilmList  from './containers/FilmList';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <FilmList />
    </Provider>
  );
}

export default App;
