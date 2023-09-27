import TYPES from "./actionType";
import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.CREATE_TASK: {
      const {
        payload: { body },
      } = action;
      const newTask = {
        id: uuidv4(),
        body: body,
        isDone: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }
    case TYPES.DELETE_TASK: {
      const {
        payload: { id },
      } = action;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      };
    }
    case TYPES.IS_DONE_TASK: {
      const {
        payload: { id, isDone },
      } = action;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, isDone: !isDone } : { ...task }
        ),
      };
    }
    case TYPES.FILTER: {
      const {
        payload: {filter}  } = action; 
      const newFilter = filter
      return {
        ...state,
        filter: newFilter,
      };
      };
    default:
      return state;
  }
}
export default reducer;