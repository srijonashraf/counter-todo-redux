import { createSlice } from "@reduxjs/toolkit";

// Generate a unique ID
const generateUniqueId = () => {
  return Date.now().toString();
};

const setToLocalStorage = (item) => {
  const uniqueId = generateUniqueId();
  localStorage.setItem(uniqueId, JSON.stringify(item));
};

const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

const updateToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

const todoSliceLocalStorage = createSlice({
  name: "todoSliceLocalStorage",
  initialState: {
    value: [],
    editItem: null,
    deleteItem: null,
  },
  reducers: {
    createTodo: (state, action) => {
      setToLocalStorage(action.payload);
      state.value.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { index, localStorageIndex, newItem } = action.payload;
      updateToLocalStorage(localStorageIndex, newItem);
      state.value[index] = newItem;
      state.editItem = null;
    },
    removeTodo: (state, action) => {
      const { index, localStorageIndex } = action.payload;
      state.value.splice(index, 1);
      state.deleteItem = index;
      removeFromLocalStorage(localStorageIndex);
      state.deleteItem = null;
    },
    setEditItem: (state, action) => {
      state.editItem = action.payload;
    },
  },
});

export const { createTodo, removeTodo, setEditItem, updateTodo } =
  todoSliceLocalStorage.actions;
export default todoSliceLocalStorage.reducer;
