import React, { useState, useReducer } from "react";
import {
  Reducer,
  initialState,
  TOGGLE_DONE,
  ADD_TODO,
  CLEAR_DONE,
} from "../reducers/Reducer";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todos, setTodos] = useState("");
  const [state, dispatch] = useReducer(Reducer, initialState);

  console.log(state);
  const toggleTodo = () => {
    return dispatch({ type: TOGGLE_DONE });
  };

  const clearDone = (e) => {
    e.preventDefault();
    return dispatch ({ type: CLEAR_DONE })
  };

  const handleChange = (e) => {
    setTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Enter New Todo"
          value={todos}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={(e) => {
            dispatch({ type: ADD_TODO, payload: todos });
          }}
        >
          Add
        </button>
        {/* <button onClick={clearDone}>Clear Done</button> */}
      </form>
      <div>
        <TodoList todos={state} toggleTodo={toggleTodo} clearDone={clearDone} />
      </div>
    </div>
  );
};

export default TodoForm;
