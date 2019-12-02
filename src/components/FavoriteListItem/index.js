import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import FavoriteButton from '../../containers/FavoriteButton';
import { getFilm } from '../../services/filmsService';

import './index.less';

const { Meta } = Card;

function FavoriteListItem({ itemId }) {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isFavorite = true;

  useEffect(() => {
    (async () => {
      const response = await getFilm(itemId);
      if (response.data.Response === 'True') {
        setItem(response.data);
        setIsLoading(prevValue => !prevValue);
      }
    })();
  }, [itemId]);
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" className="card-img" src={item.Poster} />}
        loading={isLoading}>
        <FavoriteButton
          id={itemId}
          isFavorite={isFavorite}
          className="card-favorite-btn"
        />
        <Meta title={item.Title} description={item.Type} />
      </Card>
    </>
  );
}

FavoriteListItem.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default FavoriteListItem;
