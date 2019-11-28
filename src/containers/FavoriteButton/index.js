import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import { addFilmToFavorite } from '../../actions/actionsBasic';
import './index.less';

function FavoriteButton({ id, isFavorite, className, addFilmToFavorite }) {
  const handler = e => {
    e.stopPropagation();
    addFilmToFavorite(id);
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

export default connect(null, { addFilmToFavorite })(FavoriteButton);
