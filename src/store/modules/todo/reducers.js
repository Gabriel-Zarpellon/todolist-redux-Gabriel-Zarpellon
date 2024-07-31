import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "./actionTypes";

const localTodoList = localStorage.getItem("@TODOLIST");
const initialState = localTodoList ? JSON.parse(localTodoList) : [];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id != action.id);

    case COMPLETE_TODO:
      return state.map((todo, index) =>
        index == action.index ? { ...todo, status: action.status } : todo
      );

    default:
      return state;
  }
}
