import React, { Component } from 'react';
import { Avatar, Typography, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const { Text } = Typography;

class Profile extends Component {
  componentDidMount() {}

  render() {
    const { profile } = this.props;

    return (
      <Row type="flex" gutter={{ xs: 2, sm: 4, md: 8 }} align="middle">
        <Col>
          <Avatar src={profile.imageURL} alt="Avatar" />
        </Col>
        <Col>
          <Text>{profile.name}</Text>
        </Col>
        <Col>
          <Text>{profile.familyName}</Text>
        </Col>
        <Col>{this.props.children}</Col>
      </Row>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
};

Profile.defaultProps = {
  profile: {
    email: 'emailJopa',
    familyName: 'Panasyuk',
    givenName: 'DarkLord',
    id: 'id1234567',
    imageURL:
      'https://lh3.googleusercontent.com/-vEOBRUJh2gw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcoSSdPFdaPK_TwVOnlBgek59paNg.CMID/s83-c/photo.jpg',
    name: 'Oleg',
  },
};

export default Profile;
