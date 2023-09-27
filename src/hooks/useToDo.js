import { useReducer } from "react";
import reducer from "../components/ToDo/reducer";
import TYPES from "../components/ToDo/actionType";

const useToDo = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = ({ body }) =>
    dispatch({ type: TYPES.CREATE_TASK, payload: { body } });

  const deleteTask = ({ id }) =>
    dispatch({ type: TYPES.DELETE_TASK, payload: { id } });

  const isDoneTask = ({ id, isDone }) =>
    dispatch({ type: TYPES.IS_DONE_TASK, payload: { id, isDone } });
  
  const filterTask = (filter) =>  dispatch({ type: TYPES.FILTER, payload: { filter } });
    
  
  return { state, addTask, deleteTask, isDoneTask, filterTask };
};

export default useToDo