import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import App from '../../App';

import { initAuth } from '../../services/AuthService';

class AuthComponent extends Component {
  componentDidMount() {
    initAuth(window, this.onLogging);
  }

  onLogging = (profile, authResponse) => {};

  render() {
    return (
      <>
        <div id="AuthCointainer"> </div>
        <App />
      </>
    );
  }
}

AuthComponent.propTypes = {};

export default AuthComponent;
