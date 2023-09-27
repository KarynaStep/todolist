import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import styles from "./Task.module.scss"
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";

const Task = ({ task: { id, body, isDone }, deleteTask, isDoneTask }) => {
  const handleDelete = () => {
    deleteTask({id})
  }
  const handleDone = () => {
    isDoneTask({id, isDone})
  }
  const classesTask = cx(styles.task, { [styles.done]: isDone });

  return (
    <li>
      <strong className={classesTask}>{body}</strong>
      {/* <input type="checkbox" value={isDone} onChange={handleDone} /> */}
      <div>
        <button className={styles.BtnDone} onClick={handleDone} value={isDone}>
          <DoneIcon />
        </button>
        <button className={styles.BtnDelete} onClick={handleDelete}>
          <DeleteOutlineTwoToneIcon />
        </button>
      </div>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  body: PropTypes.string,
  isDone: PropTypes.bool,
  deleteTask: PropTypes.func,
  isDoneTask: PropTypes.func,
};


export default Task;
