import { addTodo, completeTodo, removeTodo } from "./actions";

export function addTodoThunk(value) {
  return (dispatch) => {
    dispatch(addTodo(value));
  };
}

export function removeTodoThunk(id) {
  return (dispatch) => {
    dispatch(removeTodo(id));
  };
}

export function completeTodoThunk(index, todo, status) {
  return (dispatch) => {
    dispatch(completeTodo(index, status));
  };
}
