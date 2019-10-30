import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import { getFilmsAction } from '../../actions/actionsBasic';
import {
  setFiltersSearchRow,
  setFiltersNumberPage,
} from '../../actions/actionFilters';

const { Search } = Input;

class SearchRow extends Component {
  componentDidMount() {}

  executeSearchRequest = value => {
    const {
      getFilmsAction,
      setFiltersSearchRow,
      setFiltersNumberPage,
    } = this.props;
    setFiltersSearchRow(value);
    setFiltersNumberPage(1);
    getFilmsAction();
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

const mapStateToProps = null;

const mapDispatchToProps = {
  getFilmsAction,
  setFiltersSearchRow,
  setFiltersNumberPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRow);
