import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';

import { PageHeader, Row, Col, Descriptions } from 'antd';
import { getFilmAction, clearFilmInfoAction } from '../../actions/actionsBasic';

class Film extends Component {
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
    const { film } = this.props;
    const { Poster, Ratings, imdbID, ...info } =
      film && Object.keys(film).length > 0 && film;
    return (
      <>
        <Row>
          <Col>
            <PageHeader
              onBack={this.redirectToBackward}
              title={`${info.Title} (${info.Year})`}
              subTitle={`${info.Production}`}
            />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <Row gutter={{ xs: 0, sm: 16, md: 24 }}>
              <Col
                sm={{ span: 8 }}
                xs={{ span: 24 }}
                lg={{ span: 8 }}
                md={{ span: 10 }}
                style={{ marginBottom: '25px' }}>
                <img
                  style={{ width: '100%', objectFit: 'cover' }}
                  src={Poster}
                  alt="Poster"
                />
              </Col>

              <Col
                sm={{ span: 16 }}
                xs={{ span: 24 }}
                lg={{ span: 16 }}
                md={{ span: 14 }}>
                <Descriptions column={{ xs: 1, sm: 1, md: 1 }} bordered>
                  {info &&
                    Object.keys(info).length > 0 &&
                    Object.keys(info).map((el, i) => {
                      return (
                        <Descriptions.Item
                          key={`${Math.random() + i}`}
                          label={el}>
                          {`${info[el]}`}
                        </Descriptions.Item>
                      );
                    })}
                </Descriptions>
              </Col>
            </Row>
          </Col>
        </Row>
        {redirection && (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )}
      </>
    );
  }
}

Film.propTypes = {
  match: PropTypes.object,
  getFilmAction: PropTypes.func.isRequired,
  clearFilmInfoAction: PropTypes.func.isRequired,
  film: PropTypes.object,
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
});

const mapDispatchToProps = {
  getFilmAction,
  clearFilmInfoAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Film));
