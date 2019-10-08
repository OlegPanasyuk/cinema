import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions/index';

class PaginationList extends Component {
    onChange = page => {
        this.props.setFiltersNumberPage(page);
    };

    render() { 
        const { totalDataResults, current } = this.props;
        return (
            <div>
                {  totalDataResults &&
                    <Pagination current={current} size="small" total={totalDataResults} onChange={this.onChange} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    totalDataResults: state.counting.totalDataResults,
    current: state.counting.filters.page
})

const mapDispatchToProps = {
    setFiltersNumberPage: actions.setFiltersNumberPage
}

PaginationList.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList);