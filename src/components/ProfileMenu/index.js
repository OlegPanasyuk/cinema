import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default function ProfileMenu() {
  return (
    <Menu>
      <Menu.Item key="favorite">
        <Link to="/favorite">
          <Icon type="heart" />
          <span>My Favorite</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
