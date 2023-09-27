import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import style from "./TaskList.module.scss"



const TaskList = ({ tasks, filter, deleteTask, isDoneTask }) => {
  const renderTasks = (task) => {
    if (filter === 'all') {
      return (<Task
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        isDoneTask={isDoneTask}
      />);
    } else if (filter === 'done' && task.isDone) {
      return (<Task
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        isDoneTask={isDoneTask}
      />);
    } else if (filter === 'undone' && task.isDone === false) {
      return (<Task
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        isDoneTask={isDoneTask}
      />);
    }
      return null;
    };

  return (
    <ul>
      {tasks.map(renderTasks)}
    </ul>
  );
};


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  deleteTask: PropTypes.func,
};


export default TaskList;
