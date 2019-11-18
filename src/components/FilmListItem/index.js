import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { Card } from 'antd';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import './index.css';

const { Meta } = Card;

class FilmListItem extends PureComponent {
  refImg = React.createRef();

  state = {
    redirect: false,
  };

  componentDidMount() {
    const img = this.refImg.current;
    img.onerror = () => {
      img.src = 'http://placeimg.com/640/480/tech';
    };
  }

  redirection = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { item } = this.props;
    const { redirect } = this.state;

    return (
      <>
        <Card
          cover={
            <img
              ref={this.refImg}
              alt="Poster"
              className="card-img"
              src={item.Poster}
            />
          }
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
