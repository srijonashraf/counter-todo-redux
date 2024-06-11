import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
    editItem: null,
  },
  reducers: {
    createTodo: (state, action) => {
      state.value.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { index, newItem } = action.payload;
      state.value.splice(index, 1, newItem);
      state.editItem = null;
    },
    removeTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    setEditItem: (state, action) => {
      state.editItem = action.payload;
    },
  },
});

export const { createTodo, removeTodo, setEditItem, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
