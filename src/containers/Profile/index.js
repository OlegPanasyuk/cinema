import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Typography, Row, Col } from 'antd';
import PropTypes from 'prop-types';

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
          </Col>
          <Col>
            <Text>{profile.name}</Text>
          </Col>
        </Row>
        <Row
          type="flex"
          gutter={{ xs: 2, sm: 4, md: 8 }}
          align="middle"
          justify="center">
          <Col>{children}</Col>
        </Row>
      </>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  children: PropTypes.object,
};

Profile.defaultProps = {
  profile: {
    email: 'emailJopa',
    familyName: 'Panasyuk',
    givenName: 'Oleg',
    id: 'id1234567',
    imageURL:
      'https://lh3.googleusercontent.com/-vEOBRUJh2gw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcoSSdPFdaPK_TwVOnlBgek59paNg.CMID/s83-c/photo.jpg',
    name: 'Oleg Panasyuk',
  },
  children: {},
};

const mapStateToProps = state => ({
  profile: state.auth.profile,
});

export default connect(mapStateToProps, null)(Profile);
