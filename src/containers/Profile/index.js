import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Typography, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { SizeContext } from '../../components/ThemeContext';
import ProfileMenu from '../../components/ProfileMenu';

const { Text } = Typography;

class Profile extends Component {
  componentDidMount() {}

  render() {
    const { profile, children } = this.props;

    return (
      <>
        <Row
          type="flex"
          gutter={{ xs: 2, sm: 4, md: 8 }}
          align="middle"
          justify="center">
          <Col>
            <Avatar src={profile.imageURL} alt="Avatar" />
            <SizeContext.Consumer>
              {size =>
                size === 'full' && (
                  <Text style={{ marginLeft: '1em' }}>{profile.name}</Text>
                )
              }
            </SizeContext.Consumer>
          </Col>

          {children.length > 0 && children.map(child => <Col>{child}</Col>)}
          {typeof children === 'object' && !children.length && (
            <Col>{children}</Col>
          )}
        </Row>
        <Row>
          <Col>
            <ProfileMenu />
          </Col>
        </Row>
        <Row
          type="flex"
          gutter={{ xs: 2, sm: 4, md: 8 }}
          align="middle"
          justify="center"
          style={{ flexDirection: 'column' }}></Row>
      </>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  children: PropTypes.any,
};

Profile.defaultProps = {
  profile: {
    email: 'emailJopa',
    familyName: 'Panasyuk',
    givenName: 'Oleg',
    id: 'id1234567',
    imageURL: '',
    name: 'Oleg Panasyuk',
  },
  children: {},
};

const mapStateToProps = state => ({
  profile: state.auth.profile,
});

export default connect(mapStateToProps, null)(Profile);
