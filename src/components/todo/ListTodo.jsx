import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  setEditItem,
} from "../../redux/state/todo/todoSliceLocalStorage";

const ListTodo = () => {
  const [localStorageArray, setLocalStorageArray] = useState([]);
  const tasks = useSelector((state) => state.totoLocalStorage.value);
  const deleteItem = useSelector((state) => state.totoLocalStorage.deleteItem);
  const dispatch = useDispatch();

  const fetchLocalStorageData = () => {
    //Sanitize localStorage and ensure desired format
    const keys = Object.keys(localStorage).filter((key) => !isNaN(Number(key)));
    const array = keys
      .sort((a, b) => a - b)
      .map((key) => {
        const value = JSON.parse(localStorage.getItem(key));
        const valueKeys = Object.keys(value);

        const hasDesiredFormat =
          valueKeys.length === 2 &&
          valueKeys.includes("title") &&
          valueKeys.includes("description");

        if (hasDesiredFormat) {
          return {
            key,
            value: value,
          };
        }
        return null;
      })
      .filter((item) => item !== null);
    //Filter null elements

    setLocalStorageArray(array);
  };

  // Fetch data initially and whenever tasks change
  useEffect(() => {
    fetchLocalStorageData();
  }, [tasks, deleteItem]);

  return (
    <div className="p-5 overflow-auto max-sm:mx-2">
      <h1 className="text-center font-bold text-3xl mb-3">Todo Lists</h1>
      <table className="table-fixed w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-800 uppercase bg-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 border border-gray-300 w-10 text-center"
            >
              #
            </th>
            <th
              scope="col"
              className="px-6 py-3 border border-gray-300 text-center"
            >
              Task Name
            </th>
            <th
              scope="col"
              className="px-1 sm:px-6 py-3 border border-gray-300 text-center"
            >
              Task Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 border border-gray-300 text-center"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {localStorageArray.map((item, i) => {
            return (
              <tr
                key={item.key.toString()}
                className="bg-gray-50 border-b border-gray-300"
              >
                <td className=" border-gray-300 px-4 py-2 break-words">{i}</td>
                <td className=" border-gray-300 px-4 py-2 break-words">
                  {item.value.title}
                </td>
                <td className=" border-gray-300 px-4 py-2 break-words">
                  {item.value.description}
                </td>
                <td className="border-gray-300 px-4 py-2">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2">
                    <button
                      onClick={() =>
                        dispatch(
                          setEditItem({
                            index: item.key,
                            localStorageIndex: item.key,
                            item,
                          })
                        )
                      }
                      className="bg-slate-700 px-2 py-1 text-white text-sm font-normal rounded-md"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        window.confirm("Are you sure you want to delete?") &&
                          dispatch(
                            removeTodo({
                              index: item.key,
                              localStorageIndex: item.key,
                            })
                          );
                      }}
                      className="bg-red-500 px-2 py-1 text-white text-sm font-normal rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
