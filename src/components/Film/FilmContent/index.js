import React, { PureComponent } from 'react';
import { Row, Col, Descriptions, PageHeader } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import ImgComponent from '../../ImgComponent/index';
import FavoriteButton from '../../../containers/FavoriteButton';

class FilmContent extends PureComponent {
  state = {
    inProp: false,
  };

  componentDidMount = () => {
    setTimeout(this.toggleShow, 0);
  };

  toggleShow = () => {
    this.setState(state => ({
      inProp: !state.inProp,
    }));
  };

  render() {
    const { inProp } = this.state;
    const { Poster, info, redirectToBackward } = this.props;
    const propsImagePoster = {
      style: {
        width: '100%',
        objectFit: 'cover',
      },
      alt: info.Title,
    };
    if (Poster !== 'N/A') {
      propsImagePoster.src = Poster;
    }
    return (
      <>
        <Row>
          <Col span={20} offset={2}>
            <Row>
              <Col span={18}>
                <PageHeader
                  onBack={redirectToBackward}
                  title={`${info.Title} (${info.Year})`}
                  subTitle={`${info.Production}`}
                />
              </Col>
              <Col span={4} offset={2}>
                <FavoriteButton
                  className="card-favorite-btn"
                  id={info.imdbID}
                  isFavorite={false}
                />
              </Col>
            </Row>
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
                <CSSTransition
                  in={inProp}
                  timeout={500}
                  classNames="alert"
                  unmountOnExit>
                  <>
                    <ImgComponent {...propsImagePoster} />
                  </>
                </CSSTransition>
              </Col>

              <Col
                sm={{ span: 16 }}
                xs={{ span: 24 }}
                lg={{ span: 16 }}
                md={{ span: 14 }}>
                <CSSTransition
                  in={inProp}
                  timeout={500}
                  classNames="alert"
                  unmountOnExit>
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
                </CSSTransition>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(null, null)(FilmContent);
