import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout, Icon, Switch as SwitchAnt } from 'antd';
import 'antd/dist/antd.css';
import { themes, collapsedSize, SizeContext } from './components/ThemeContext';
import './App.css';
import './index.less';
import MainPage from './containers/MainPage/index';
import Film from './components/Film/index';
import ErrorBoundary from './components/ErrorBoundary/index';
import FavoriteItems from './containers/FavoriteItems/index';
import darkTheme from './themes/darkTheme/index';
import lightTheme from './themes/lightTheme/index';

const history = createBrowserHistory();
const { Header, Content, Footer, Sider } = Layout;

// Ой же какой это шлак надо переписать

const initColors = () => {
  let vars = {};
  const initialValue = { ...darkTheme };
  try {
    vars = { ...initialValue };
  } finally {
    window.less
      .modifyVars(vars)
      .then(() => {})
      .catch(() => {});
  }
};

initColors();

function App({ children }) {
  const [theme, switchTheme] = useState(themes.dark);
  const [collapsingMenu, switchCollapsingMenu] = useState(true);
  const [collapsedSizeState, switchCollapsedSize] = useState(
    collapsedSize.short
  );

  const toggleColors = () => {
    switchTheme(theme !== themes.light ? themes.light : themes.dark);
    let vars = {};
    const initialValue =
      theme !== 'light' ? { ...lightTheme } : { ...darkTheme };

    try {
      vars = { ...initialValue };
    } finally {
      window.less
        .modifyVars(vars)
        .then(() => {})
        .catch(() => {});
    }
  };

  const toggleCollapse = () => {
    switchCollapsingMenu(!collapsingMenu);
    if (collapsedSizeState === collapsedSize.short) {
      switchCollapsedSize(collapsedSize.full);
    } else {
      switchCollapsedSize(collapsedSize.short);
    }
  };

  return (
    <ErrorBoundary>
      <Layout>
        <Header className="header">
          <Icon type="chrome" style={{ color: 'white', fontSize: '3em' }} />
          <SwitchAnt defaultChecked onChange={toggleColors} />
        </Header>
        <Layout>
          <SizeContext.Provider value={collapsedSizeState}>
            <Sider
              collapsible
              collapsed={collapsingMenu}
              onCollapse={toggleCollapse}>
              {children}
            </Sider>
          </SizeContext.Provider>
          <Layout>
            <Content>
              <Switch>
                <Route exact path="/" history={history} component={MainPage} />
                <Route path="/film/:id" history={history} component={Film} />
                <Route
                  path="/favorite"
                  history={history}
                  component={FavoriteItems}
                />
              </Switch>
            </Content>
            <Footer>Footer @ Cinema 2019</Footer>
          </Layout>
        </Layout>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
