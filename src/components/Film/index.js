import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { Spin } from 'antd';

import { getFilmAction, clearFilmInfoAction } from '../../actions/actionsBasic';
import './style.css';
import FilmContent from './FilmContent/index';

class Film extends React.Component {
  state = {
    redirection: false,
  };

  componentDidMount() {
    const { match, getFilmAction } = this.props;
    getFilmAction(match.params.id);
  }

  componentWillUnmount() {
    const { clearFilmInfoAction } = this.props;
    clearFilmInfoAction();
  }

  redirectToBackward = () => {
    this.setState({
      redirection: true,
    });
  };

  render() {
    const { redirection } = this.state;
    const { film, isLoading } = this.props;
    const { Poster, Ratings, imdbID, ...info } =
      film && Object.keys(film).length > 0 && film;

    return (
      <div>
        {isLoading && <Spin size="large" />}
        {!isLoading && Object.keys(film).length > 0 && (
          <FilmContent
            Poster={Poster}
            info={info}
            redirectToBackward={this.redirectToBackward}
          />
        )}
        {redirection && (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )}
      </div>
    );
  }
}

Film.propTypes = {
  match: PropTypes.object,
  getFilmAction: PropTypes.func.isRequired,
  clearFilmInfoAction: PropTypes.func.isRequired,
  film: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

Film.defaultProps = {
  match: {
    params: {
      id: 1,
    },
  },
  film: {},
};

const mapStateToProps = state => ({
  film: state.filmToShow.film,
  isLoading: state.system.isLoading,
});

const mapDispatchToProps = {
  getFilmAction,
  clearFilmInfoAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Film));
