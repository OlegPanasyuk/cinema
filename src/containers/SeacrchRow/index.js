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
import { inputWithOnSearch } from './../../components/CustomSearch/index';
import { themes, ThemeContext } from './../../components/ThemeContext/index';

const CustomSearch = inputWithOnSearch(Input);

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
        <ThemeContext.Consumer>
          {style => (
            <CustomSearch
              placeholder="input film name"
              onSearch={this.executeSearchRequest}
              style={{...style}}
            />
          )}
        </ThemeContext.Consumer>
        {/* <Search
          placeholder="input film name"
          onSearch={this.executeSearchRequest}
          loading={false}
        /> */}
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
