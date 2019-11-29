import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import {
  addFilmToFavorite,
  removeFilmFromFavorite,
} from '../../actions/actionsBasic';
import './index.less';

function FavoriteButton({
  id,
  isFavorite,
  className,
  addFilmToFavorite,
  removeFilmFromFavorite,
}) {
  const handler = e => {
    e.stopPropagation();
    if (!isFavorite) addFilmToFavorite(id);
    else removeFilmFromFavorite(id);
  };
  return (
    <Button className={`favorite-btn ${className}`} onClick={handler}>
      <Icon type="heart" theme={isFavorite ? 'filled' : ''} />
    </Button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

FavoriteButton.defaultProps = {
  className: '',
};

export default connect(null, { addFilmToFavorite, removeFilmFromFavorite })(
  FavoriteButton
);
