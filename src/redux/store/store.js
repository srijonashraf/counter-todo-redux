import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counterSlice";
import todoReducer from "../state/todo/todoSlice";
import todoLocalStorageReducer from "../state/todo/todoSliceLocalStorage";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    totoLocalStorage: todoLocalStorageReducer,
  },
});
