import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  console.log(props.todos);
  return (
    <div className="todo-list">
      {
        props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
        ))}
      <button className="clear-btn" onClick={props.clearDone}>
        Clear Complete Todo's
      </button>
    </div>
  );
};

export default TodoList;
