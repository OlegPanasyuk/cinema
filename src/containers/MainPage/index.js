import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import SearchRow from '../SearchRow';
import FilmList from '../FilmList';
import PaginationList from '../Pagination';
import './style.css';
import Filters from '../Filters';

class MainPage extends PureComponent {
  render() {
    const { listFilms, error } = this.props;
    let classSearchRow = 'searchRow_not-used';
    if (listFilms.length > 0 && !(Object.keys(error).length > 0)) {
      classSearchRow = 'searchRow_used';
    }
    if (listFilms.length === 0 && Object.keys(error).length > 0) {
      classSearchRow = 'searchRow_used';
    }
    return (
      <>
        <Row
          className={`searchRow ${classSearchRow}`}
          type="flex"
          align="middle">
          <Col span={12} offset={6}>
            <SearchRow />
            <Row
              type="flex"
              justify="space-around"
              style={{ marginTop: '15px' }}>
              <Filters />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <PaginationList />
            <FilmList />
          </Col>
        </Row>
      </>
    );
  }
}

MainPage.propTypes = {
  listFilms: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  listFilms: state.counting.data,
  error: state.counting.error,
});

export default withRouter(connect(mapStateToProps, null)(MainPage));
