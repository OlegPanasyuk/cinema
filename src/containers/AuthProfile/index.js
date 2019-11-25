import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Profile from '../Profile';

function AuthProfile({ isAuthorized, toSingIn, toSignOut }) {
  const buttonGoogle = (
    <Button
      type="primary"
      icon="login"
      style={{ width: '100%' }}
      onClick={toSingIn}>
      SingIn
    </Button>
  );

  const profileAssembly = (
    <Profile>
      <Button onClick={toSignOut} icon="logout">
        Sing Out
      </Button>
    </Profile>
  );

  const element = isAuthorized ? profileAssembly : buttonGoogle;

  return <>{element}</>;
}

AuthProfile.propTypes = {
  toSignOut: PropTypes.func,
  toSingIn: PropTypes.func,
  isAuthorized: PropTypes.bool,
};

AuthProfile.defaultProps = {
  toSignOut: () => {},
  toSingIn: () => {},
  isAuthorized: false,
};

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
});

export default connect(mapStateToProps, null)(AuthProfile);
