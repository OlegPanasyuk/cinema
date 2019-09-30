import React, { PureComponent } from 'react';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Meta } = Card;

class FilmListItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
    <Card
      cover={
        <img
          alt="Poster"
          className='card-img'
          src={item.Poster}
        />
      }
      
    >
      <Meta
        title={item.Title}
        description="This is the description"
      />
    </Card>
    );
  }
}

export default FilmListItem;
