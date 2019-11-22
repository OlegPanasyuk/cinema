import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import ImgComponent from '../ImgComponent/index';

import './index.less';

const { Meta } = Card;

class FilmListItem extends PureComponent {
  state = {
    redirect: false,
  };

  redirection = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { item } = this.props;
    const { redirect } = this.state;
    const propImage = {
      alt: item.Title,
      className: 'card-img',
    };

    if (item.Poster !== 'N/A') {
      propImage.src = item.Poster;
    }
    return (
      <>
        <Card
          cover={<ImgComponent {...propImage} />}
          className="filmList__item"
          onClick={this.redirection}>
          <Meta title={item.Title} description={`${item.Type} ${item.Year}`} />
        </Card>
        {redirect && (
          <Redirect
            to={{
              pathname: `/film/${item.imdbID}`,
            }}
          />
        )}
      </>
    );
  }
}

FilmListItem.propTypes = {
  item: PropTypes.object,
};

FilmListItem.defaultProps = {
  item: {
    Poster: '',
    imdbID: '0',
    Title: 'NoName',
    Type: 'movie',
    Year: new Date().getFullYear(),
  },
};

export default FilmListItem;
