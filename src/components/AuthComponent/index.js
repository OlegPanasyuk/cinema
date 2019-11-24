import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Profile from '../../containers/Profile';
import App from '../../App';

import { initAuth, signOut } from '../../services/AuthService';

class AuthComponent extends Component {
  element = (<div id="AuthCointainer"> </div>);

  element2 = (
    <Profile>
      <Button onClick={signOut}> LogOut</Button>
    </Profile>
  );

  componentDidMount() {
    initAuth(window, this.onLogging);
  }

  onLogging = (profile, authResponse) => {
    console.log(profile, authResponse);
  };

  render() {
    return (
      <>
        <App>{this.element}</App>
      </>
    );
  }
}

AuthComponent.propTypes = {};

export default AuthComponent;
