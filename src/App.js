import React from 'react';
import { Provider } from 'react-redux';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { configureStore } from './store';

import './App.css';
import './index.css';
import SearchRow from './containers/SeacrchRow/index';
import FilmList from './containers/FilmList';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Row style={{height: '100vh'}} type='flex' align='middle'>
        <Col span={12} offset={6}>
          <SearchRow />
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={4} >
          <FilmList />
        </Col>
      </Row>
    </Provider>
  );
}

export default App;
