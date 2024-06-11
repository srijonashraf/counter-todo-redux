import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  setCustom,
} from "../../redux/state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const numberInputRef = useRef();

  return (
    <div className="max-w-md w-full rounded-lg shadow-lg flex flex-col max-sm:shadow-xl max-sm:mx-2">
      <div className="p-3 max-sm:p-5 rounded-t-lg bg-slate-500">
        <p className="text-2xl font-bold text-white">Counter App</p>
      </div>
      <div className="flex items-center justify-center h-36">
        <p className="text-6xl max-sm:text-7xl">{count}</p>
      </div>
      <div className="form-group flex items-center justify-center mb-5 gap-4">
        <input
          ref={numberInputRef}
          type="number"
          min="0"
          name="numberInput"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full/2 rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter the number"
        />
        <button
          onClick={() =>
            dispatch(setCustom(numberInputRef.current.value)) &&
            (numberInputRef.current.value = "")
          }
          className="w-28 h-10 max-sm:w-24 max-sm:text-sm  bg-purple-600 text-white rounded-md"
        >
          Set Number
        </button>
      </div>
      <div className="flex justify-center gap-4 mb-8 max-sm:gap-2 max-sm:mb-6">
        <button
          onClick={() => dispatch(increment())}
          className="w-28 h-10 max-sm:w-20 max-sm:text-sm bg-emerald-500 text-white rounded-md"
        >
          Increase
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="w-28 h-10 max-sm:w-20 max-sm:text-sm bg-slate-600 text-white rounded-md"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="w-28 h-10 max-sm:w-20 max-sm:text-sm bg-pink-600 text-white rounded-md"
        >
          Reset
        </button>
      </div>
      <div className="footer flex justify-center">
        <p className="flex gap-3 mb-5 text-sm font-semibold">
          <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">
            #counter
          </span>
          <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">
            #app
          </span>
          <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">
            #mern
          </span>
        </p>
      </div>
    </div>
  );
};

export default Counter;
