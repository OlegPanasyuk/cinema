import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function FavoriteItems({ favoritesItems }) {
  return <div>{favoritesItems && favoritesItems.map(el => <p>{el}</p>)}</div>;
}

FavoriteItems.propTypes = {};

const mapStateToProps = state => ({
  favoritesItems: state.personal.favoritesItems,
});

export default connect(mapStateToProps, null)(FavoriteItems);
