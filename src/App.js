import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout, Icon, Switch as SwitchAnt } from 'antd';
import 'antd/dist/antd.css';
import { configureStore } from './store';
import { themes } from './components/ThemeContext';
import './App.css';
import './index.less';
import MainPage from './containers/MainPage/index';
import Film from './components/Film/index';
import ErrorBoundary from './components/ErrorBoundary/index';
import darkTheme from './themes/darkTheme/index';
import lightTheme from './themes/lightTheme/index';

const store = configureStore();
const history = createBrowserHistory();
const { Header, Content, Footer } = Layout;

function App({ children }) {
  const [theme, switchTheme] = useState(themes.dark);
  const toggleColors = () => {
    switchTheme(theme !== themes.light ? themes.light : themes.dark);
    let vars = {};
    const initialValue =
      theme !== 'light' ? { ...lightTheme } : { ...darkTheme };

    try {
      vars = { ...initialValue };
    } finally {
      console.log(vars);
      window.less
        .modifyVars(vars)
        .then(d => {
          console.log('d', d);
        })
        .catch(error => {
          console.error('Failed to update theme', error);
        });
    }
  };
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Layout>
          <Header className="header">
            <Icon type="chrome" style={{ color: 'white', fontSize: '3em' }} />
            <SwitchAnt defaultChecked onChange={toggleColors} />
          </Header>
          <Content>
            <Router>
              <Switch>
                <Route exact path="/" history={history} component={MainPage} />
                <Route path="/film/:id" history={history} component={Film} />
              </Switch>
            </Router>
          </Content>
          <Footer>Footer @ Cinema 2019</Footer>
        </Layout>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
