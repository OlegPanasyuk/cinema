import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FavoriteListItem from '../../components/FavoriteListItem';
import './index.less';

function FavoriteItems({ favoritesItems }) {
  return (
    <>
      <TransitionGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favoritesItems &&
          favoritesItems.map(itemId => (
            <CSSTransition key={itemId} timeout={500} classNames="item">
              <FavoriteListItem itemId={itemId} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
}

FavoriteItems.propTypes = { favoritesItems: PropTypes.array };

FavoriteItems.defaultProps = { favoritesItems: [] };

const mapStateToProps = state => ({
  favoritesItems: state.personal.favoritesItems,
});

export default connect(mapStateToProps, null)(FavoriteItems);
