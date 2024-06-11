import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, updateTodo } from "../../redux/state/todo/todoSlice";

const CreateTodo = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
  });

  const editItem = useSelector((state) => state.todo.editItem);
  const dispatch = useDispatch();

  useEffect(() => {
    editItem && setFormValue(editItem.item);
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.title && formValue.description) {
      if (editItem) {
        dispatch(updateTodo({ index: editItem.index, newItem: formValue }));
      } else {
        dispatch(createTodo(formValue));
      }
      setFormValue({ title: "", description: "" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 sm:p-3 rounded-t-lg bg-slate-600">
        <p className="text-3xl sm:text-2xl font-bold text-white">ToDo App</p>
      </div>
      <div className="input-group flex flex-col gap-5 m-5">
        <input
          type="text"
          id="title"
          className="block w-full py-2 text-lg 
          text-black font-bold rounded-md border shadow-sm
          border-slate-300 focus:outline-none
          focus:border-slate-400 focus:ring-slate-500 focus:ring-1 
          placeholder:px-1 placeholder:font-normal placeholder:text-sm p-2"
          placeholder="Todo Title"
          value={formValue.title}
          onChange={(e) =>
            setFormValue({
              ...formValue,
              title: e.target.value,
            })
          }
        />
        <textarea
          rows={10}
          id="description"
          className="block w-full text-md 
          text-black rounded-md border shadow-sm
          border-slate-300 focus:outline-none
          focus:border-slate-400 focus:ring-slate-500 focus:ring-1
           resize-none placeholder:px-1 placeholder:text-sm p-2 py-3"
          placeholder="Todo Description"
          value={formValue.description}
          onChange={(e) =>
            setFormValue({
              ...formValue,
              description: e.target.value,
            })
          }
        />
        <button
          className="bg-slate-700 w-24 h-8 rounded-md
         text-white hover:bg-slate-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
