import React from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import useToDo from "../../hooks/useToDo";
import FilterTask from "./FilterTask";
import { FILTER_TASK } from "../../constants";
import styles from "./ToDo.module.scss"

const ToDo = () => {
  const { state, addTask, deleteTask, isDoneTask, filterTask } = useToDo({
    tasks: [
      {
        id: uuidv4(),
        body: "work1",
        isDone: false,
      },
      {
        id: uuidv4(),
        body: "work2",
        isDone: false,
      },
      {
        id: uuidv4(),
        body: "work3",
        isDone: false,
      },
      {
        id: uuidv4(),
        body: "work4",
        isDone: false,
      },
      {
        id: uuidv4(),
        body: "work5",
        isDone: false,
      },
    ],
    filter: FILTER_TASK.ALL,
  });

  return (
    <section>
      <h1>Todo List</h1>
      <div className={styles.wrapper}>
        <span>
        <TaskForm addTask={addTask} />
        <FilterTask filter={state.filter} filterTask={filterTask} /></span>
        <TaskList
          filter={state.filter}
          tasks={state.tasks}
          deleteTask={deleteTask}
          isDoneTask={isDoneTask}
        />
      </div>
    </section>
  );
};

export default ToDo;
