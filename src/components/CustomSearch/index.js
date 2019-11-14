import React from 'react';
import { Icon } from 'antd';

export const inputWithOnSearch = Component => {
  const SearchIcon = React.forwardRef((props, ref) => {
    return <Icon {...props} ref={ref} />;
  });

  class WrappedComponent extends React.PureComponent {
    ref = React.createRef();

    onSearch = () => {
      const { onSearch } = this.props;
            onSearch(this.ref.current.state.value);
    }

    render() {
      console.log(this.ref);
      const { onSearch, style, ...restProps } = this.props;
      const additionalProps = {
        onPressEnter: this.onSearch,
      };
      const suffix = <SearchIcon type="search" onClick={this.onSearch} />;
      return (
        <>
          <Component
            {...restProps}
            {...additionalProps}
            style={{...style}}
            ref={this.ref}
            suffix={suffix}
          />
        </>
      );
    }
  }

  return WrappedComponent;
};
