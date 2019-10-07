import React, { PureComponent } from 'react';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Meta } = Card;

class FilmListItem extends PureComponent {
  refImg = React.createRef();

  componentDidMount() {
    const img = this.refImg.current;
    img.onerror = function(err) {
      img.src = 'http://placeimg.com/640/480/tech';
    };
  }

  render() {
    const { item } = this.props;
    return (
      <Card
        cover={
          <img
            ref={this.refImg}
            alt="Poster"
            className="card-img"
            src={item.Poster}
          />
        }>
        <Meta title={item.Title} description="This is the description" />
      </Card>
    );
  }
}

export default FilmListItem;
