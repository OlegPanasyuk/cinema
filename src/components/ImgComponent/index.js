import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Spin, Empty } from 'antd';
import 'antd/dist/antd.css';

class ImgComponent extends PureComponent {
  state = {
    loading: true,
    element: '',
  };

  componentDidMount = () => {
    const { src, alt, className } = this.props;
    fetch(src)
      .then(res => {
        return res.blob();
      })
      .then(data => {
        URL.createObjectURL(data);
        const Image = React.createElement('img', {
          src: URL.createObjectURL(data),
          style: {
            width: '100%',
            objectFit: 'cover',
          },
          className,
          alt,
        });
        this.onLoad(Image);
      })
      .catch(() => {
        this.onError();
      });
  };

  onLoad = image => {
    this.setState({
      loading: false,
      element: image,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      element: <Empty />,
    });
  };

  render() {
    const { loading, element } = this.state;
    const { className } = this.props;
    return (
      <>
        <Spin
          spinning={loading}
          className={className}
          style={{ width: '100%', height: '100%' }}
        />
        {!loading && element}
      </>
    );
  }
}

ImgComponent.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
};

ImgComponent.defaultProps = {
  src: '/image/Placeholder.png',
};

export default ImgComponent;
