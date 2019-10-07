import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import { getFilmsAction } from '../../actions/actionsBasic';

const { Search } = Input;

class SearchRow extends Component {
  componentDidMount() {}

  executeSearchRequest = value => {
    this.props.getFilmsAction({ s: value });
  };

  render() {
    return (
      <div>
        <Search
          placeholder="input film name"
          onSearch={this.executeSearchRequest}
        />
      </div>
    );
  }
}

SearchRow.propTypes = {};

const mapDispatchToProps = {
  getFilmsAction,
};

export default connect(
  null,
  mapDispatchToProps
)(SearchRow);
