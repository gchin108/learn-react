"use client";
import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState
    default:
      throw new Error("unknown action")
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({type: "reset"})
  };

  return (
    <div className="flex flex-col gap-4 text-lg font-bold m-4 items-center text-black">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span className="text-white ml-2">{step}</span>
      </div>

      <div>
        <button onClick={dec} className="small-btn">
          -
        </button>
        <input value={count} onChange={defineCount} className="pl-2" />
        <button onClick={inc} className="small-btn">
          +
        </button>
      </div>

      <p className="text-white">{date.toDateString()}</p>

      <div>
        <button onClick={reset} className="small-btn">
          Reset
        </button>
      </div>
    </div>
  );
}
export default DateCounter;
