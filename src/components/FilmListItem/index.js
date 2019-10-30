import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { Card } from 'antd';
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
    img.onerror = function() {
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

export default FilmListItem;
