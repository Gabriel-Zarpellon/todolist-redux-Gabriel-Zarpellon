import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./modules/todo/reducers";

// const reducers = combineReducers({ todoList: todoReducer });
// export const store = createStore(reducers, applyMiddleware(thunk));

const reducer = {
  todoList: todoReducer,
};

export const store = configureStore({
  reducer,
});
