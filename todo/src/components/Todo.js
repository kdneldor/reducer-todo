import React from "react";

const Todo = (props) => {
    console.log(props.todo)
  return (
    <div
      className={`todo${props.todo.done ? " done" : ""}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      <p>{props.todo.todo}</p>
    </div>
  );
};

export default Todo;
