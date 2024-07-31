import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "./actionTypes";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: {
      id: crypto.randomUUID(),
      status: false,
      description: todo,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id: id,
  };
}

export function completeTodo(index, status) {
  return {
    type: COMPLETE_TODO,
    index: index,
    status: !status,
  };
}
