import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getFilmsAction } from '../../actions/actionsBasic';

import FilmListItem from '../../components/FilmListItem';

class FilmList extends Component {

  componentDidMount() {
    // fetch('http://www.omdbapi.com/?s=Guardians&page=1&apikey=467ce186')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ data: data.Search });
    //   });
  }

  render() {
    const { listFilms } = this.props;
    return (
      <>
        <button
          type="button"
          onClick={() => {
            this.props.getFilmsAction({});
          }}>
          {this.props.listFilms.length}
        </button>
        <h1>FilmList</h1>
        <div>
          {listFilms.map(element => {
            return <FilmListItem key={Math.random()} item={element} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  listFilms: state.counting.data,
});

const mapDispatchToProps = {
  getFilmsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmList);
