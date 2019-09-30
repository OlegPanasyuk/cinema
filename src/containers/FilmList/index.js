import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { getFilmsAction } from '../../actions/actionsBasic';

import FilmListItem from '../../components/FilmListItem';

class FilmList extends PureComponent {
  render() {
    const { listFilms } = this.props;


    return (
      <>
        <Row gutter={{ xs: 8, sm: 16, md: 24}}>
          {listFilms.map((element, i) => {
            return (i<5)? <Col span={4} ><FilmListItem key={Math.random()} item={element} /></Col>: undefined;
          })}
        </Row>
        <br/>
        <Row gutter={{ xs: 8, sm: 16, md: 24}}>
          {listFilms.map((element, i) => {
            return (i>=5)? <Col span={4} ><FilmListItem key={Math.random()} item={element} /></Col>: undefined;
          })}
        </Row>
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
