import React from "react";
import CreateTodo from "./../components/todo/CreateTodo";
import ListTodo from "../components/todo/ListTodo";

const TodoPage = () => {
  return (
    <div
      className="container mx-auto flex flex-col
     mt-12 mb-5 shadow-md rounded-md w-full lg:w-1/2"
    >
      <CreateTodo />
      <ListTodo />
    </div>
  );
};

export default TodoPage;
