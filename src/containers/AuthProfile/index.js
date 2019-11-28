import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Profile from '../Profile';
import { SizeContext } from '../../components/ThemeContext';

import './index.less';

function AuthProfile({ isAuthorized, toSingIn, toSignOut }) {
  const buttonGoogle = (
    <SizeContext.Consumer>
      {value => (
        <Button
          type="primary"
          icon="login"
          className="btn-login"
          onClick={toSingIn}>
          {value === 'full' && 'Sing In'}
        </Button>
      )}
    </SizeContext.Consumer>
  );

  const profileAssembly = (
    <Profile>
      <SizeContext.Consumer>
        {value => (
          <Button
            onClick={toSignOut}
            icon="logout"
            style={{ marginTop: `${value === 'full' && '1em'}` }}>
            {value === 'full' && 'Sing Out'}
          </Button>
        )}
      </SizeContext.Consumer>
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
