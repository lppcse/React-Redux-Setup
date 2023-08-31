import React, { Component } from "react";
import { render } from "react-dom";

import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from "react-redux";



const initialState = {
  count: 0
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const decrement = () => {
  return { type: DECREMENT };
};

const increment = () => {
  return { type: INCREMENT };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const store = configureStore( {
  reducer: reducer });

const Counter = props => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
    </main>
  );
};

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
