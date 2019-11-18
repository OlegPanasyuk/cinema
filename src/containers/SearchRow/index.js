import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { getFilmsAction } from '../../actions/actionsBasic';
import {
  setFiltersSearchRow,
  setFiltersNumberPage,
} from '../../actions/actionFilters';
import { inputWithOnSearch } from '../../components/CustomSearch/index';
import { ThemeContext } from '../../components/ThemeContext/index';

const CustomSearch = inputWithOnSearch(Input);

class SearchRow extends PureComponent {
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

  handlerChangeSearchRow = e => {
    const { value } = e.target;
    const { setFiltersSearchRow } = this.props;
    setFiltersSearchRow(value);
  };

  render() {
    const { searchValueString } = this.props;
    return (
      <div>
        <ThemeContext.Consumer>
          {style => (
            <CustomSearch
              placeholder="input film name"
              onSearch={this.executeSearchRequest}
              onChange={this.handlerChangeSearchRow}
              value={searchValueString}
              style={{ ...style }}
            />
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

SearchRow.propTypes = {
  getFilmsAction: PropTypes.func.isRequired,
  setFiltersSearchRow: PropTypes.func.isRequired,
  setFiltersNumberPage: PropTypes.func.isRequired,
  searchValueString: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  searchValueString: state.counting.filters.s,
});

const mapDispatchToProps = {
  getFilmsAction,
  setFiltersSearchRow,
  setFiltersNumberPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRow);
