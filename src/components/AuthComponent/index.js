import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../../App';
import * as serviceAuth from '../../services/AuthService';
import AuthProfile from '../../containers/AuthProfile';
import { singIn, singOut } from '../../actions/actionAuth';

class AuthComponent extends Component {
  componentDidMount() {
    const { singIn } = this.props;
    serviceAuth.initAuth(window, singIn);
  }

  onSingIn = async () => {
    const { singIn } = this.props;
    const { profileInfo, authResponseInfo } = await serviceAuth.signIn(window);
    singIn(profileInfo, authResponseInfo);
  };

  onSingOut = () => {
    const { singOut } = this.props;
    serviceAuth.signOut();
    singOut();
  };

  render() {
    return (
      <>
        <App>
          <AuthProfile toSignOut={this.onSingOut} toSingIn={this.onSingIn} />
        </App>
      </>
    );
  }
}

AuthComponent.propTypes = {
  singIn: PropTypes.func,
  singOut: PropTypes.func,
};

AuthComponent.defaultProps = {
  singIn: () => {},
  singOut: () => {},
};

const mapDispatchToProps = {
  singIn,
  singOut,
};

export default connect(null, mapDispatchToProps)(AuthComponent);
