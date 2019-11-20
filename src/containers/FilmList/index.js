import React, { PureComponent, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Row, Col, Empty, Spin } from 'antd';
import { getFilmsAction } from '../../actions/actionsBasic';
import './style.css';

const FilmListItem = React.lazy(() => import('../../components/FilmListItem'));

class FilmList extends PureComponent {
  state = {
    columns: 4,
  };

  componentDidMount() {
    this.onResizeWindow();
    window.onresize = this.onResizeWindow;
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  onResizeWindow = () => {
    const points = {
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1600,
    };
    const columnsSizes = {
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 3,
      xxl: 4,
    };

    const width = window.innerWidth;

    const pointsKeys = Object.keys(points);

    for (let index = 0; index < pointsKeys.length; index += 1) {
      if (width < points[pointsKeys[index]]) {
        this.setState({
          columns: columnsSizes[pointsKeys[index]],
        });
        break;
      }
      this.setState({
        columns: 4,
      });
    }
  };

  render() {
    const { listFilms, error, isLoading } = this.props;
    const { columns } = this.state;
    const rows = Array(Math.ceil(listFilms.length / columns))
      .fill(0)
      .map(() => []);
    let counter = 0;
    listFilms.forEach((element, i) => {
      if (i % columns === 0 && i >= columns) {
        counter += 1;
      }
      rows[counter].push(element);
    });
    const colSpan = Math.floor(24 / columns);
    let wrapperClassName = '';
    if (rows && rows.length > 0) {
      wrapperClassName = 'filmList__content';
    }
    if (rows && rows.length === 0 && error && Object.keys(error).length > 0) {
      wrapperClassName = 'filmList__content';
    }

    return (
      <div className={wrapperClassName}>
        {isLoading && <Spin size="large" />}
        {!isLoading &&
          rows &&
          rows.map(cols => {
            return (
              <Row
                gutter={{ xs: 8, sm: 16, md: 24 }}
                style={{ marginTop: '24px' }}>
                {cols.map(element => {
                  return (
                    <Col span={colSpan} key={Math.random()}>
                      <Suspense fallback={<Spin />}>
                        <FilmListItem item={element} />
                      </Suspense>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        {!isLoading &&
          rows &&
          rows.length === 0 &&
          error &&
          Object.keys(error).length > 0 && <Empty />}
      </div>
    );
  }
}

FilmList.propTypes = {
  listFilms: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  listFilms: state.counting.data,
  error: state.counting.error,
  isLoading: state.system.isLoading,
});

const mapDispatchToProps = {
  getFilmsAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilmList)
);
