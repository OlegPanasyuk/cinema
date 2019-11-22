import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { setFilterType } from '../../actions/actionFilters';
import { getFilmsAction } from '../../actions/actionsBasic';

const { Option } = Select;

function Filters({ setFilterType, getFilmsAction }) {
  function handlerTypeFilter(type) {
    setFilterType(type);
    getFilmsAction();
  }

  // function handlerPlotFilter(plot) {
  //   setFilterPlot(plot);
  //   getFilmsAction();
  // }
  return (
    <>
      <Select defaultValue="" onChange={handlerTypeFilter}>
        <Option value="">All</Option>
        <Option value="movie">Movie</Option>
        <Option value="series">Series</Option>
        <Option value="episode">Episode</Option>
      </Select>
      {/* <Select
        defaultValue="short"
        style={{ width: 120 }}
        onChange={handlerPlotFilter}>
        <Option value="short">Short</Option>
        <Option value="full">Full</Option>
      </Select> */}
    </>
  );
}

Filters.propTypes = {
  setFilterType: PropTypes.func.isRequired,
  getFilmsAction: PropTypes.func.isRequired,
};

export default connect(null, {
  setFilterType,
  getFilmsAction,
})(Filters);
