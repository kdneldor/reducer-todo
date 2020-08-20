import React, { useState, useReducer } from 'react';
import {Reducer, initialState, TOGGLE_COMPLETED, UPDATE_NAME } from '../src/reducers/Reducer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(Reducer, initialState)

  toggleTodo = (todoId) => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    });
  };

  addTodo = (todo) => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearDone = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.done),
    });
  };

  return (
    <div className="App">
      <div className="header">
          <h2>Welcome to the Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>

        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearDone={this.clearDone}
        />
    </div>
  );
}

export default App;
