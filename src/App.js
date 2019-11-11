import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout, Icon, Switch as SwitchAnt } from 'antd';
import 'antd/dist/antd.css';
import { configureStore } from './store';
import { ThemeContext, themes } from './components/ThemeContext';
import './App.css';
import './index.css';
import MainPage from './containers/MainPage/index';
import Film from './components/Film/index';
import ErrorBoundary from './components/ErrorBoundary/index';

const store = configureStore();
const history = createBrowserHistory();
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [theme, switchTheme] = useState(themes.light)

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    switchTheme(newTheme)
  }
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Layout>
          <ThemeContext.Provider value={theme}>
            <Header className="header">
              <Icon type="chrome" style={{ color: 'white', fontSize: '3em' }} />
              <SwitchAnt defaultChecked onChange={toggleTheme}/>
            </Header>
            <Content>
              <Router>
                <Switch>
                  <Route
                    exact
                    path="/"
                    history={history}
                    component={MainPage}
                  />
                  <Route path="/film/:id" history={history} component={Film} />
                </Switch>
              </Router>
            </Content>
            <Footer>Footer @ Cinema 2019</Footer>
          </ThemeContext.Provider>
        </Layout>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
