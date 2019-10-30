import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import SearchRow from '../SeacrchRow';
import FilmList from '../FilmList';
import PaginationList from '../Pagination';
import './style.css';


class MainPage extends PureComponent {
  render() {
    const { listFilms } = this.props;
    let classSearchRow =
      listFilms.length > 0 ? 'searchRow_used' : 'searchRow_not-used';
    return (
      <>
        <Row
          className={`searchRow ${classSearchRow}`}
          type="flex"
          align="middle">
          <Col span={12} offset={6}>
            <SearchRow />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <PaginationList />
            <FilmList />
          </Col>
        </Row>
        <Row>
          <Col>
            <footer>footer</footer>
          </Col>
        </Row>
      </>
    );
  }
}

MainPage.propTypes = {
  listFilms: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  listFilms: state.counting.data,
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(MainPage)
);
