import React from "react";
import { FILTER_TASK } from "../../../constants";
import PropTypes from "prop-types";
import styles from "./FilterTask.module.scss"

const FilterTask = ({ filter, filterTask }) => {
  const handleFilter = ({ target: { value } }) => {
    filterTask(value);
  };
  return (
      <select onChange={handleFilter}>
        {filter}
        <option value={FILTER_TASK.ALL}>{FILTER_TASK.ALL}</option>
        <option value={FILTER_TASK.DONE}>{FILTER_TASK.DONE}</option>
        <option value={FILTER_TASK.UNDONE}>{FILTER_TASK.UNDONE}</option>
      </select>
  );
};

FilterTask.propTypes = {
  filter: PropTypes.string,
  filterTask: PropTypes.func,
};

export default FilterTask;
