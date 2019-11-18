import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions/index';

class PaginationList extends Component {
  onChange = page => {
    const { setFiltersNumberPage } = this.props;
    setFiltersNumberPage(page);
  };

  render() {
    const { totalDataResults, current } = this.props;
    return (
      <div>
        {totalDataResults > 0 && (
          <Pagination
            current={current}
            size="small"
            total={totalDataResults}
            onChange={this.onChange}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalDataResults: state.counting.totalDataResults,
  current: state.counting.filters.page,
});

const mapDispatchToProps = {
  setFiltersNumberPage: actions.setFiltersNumberPage,
};

PaginationList.propTypes = {
  totalDataResults: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  setFiltersNumberPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList);
