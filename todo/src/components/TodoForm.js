import React from "react";


const TodoForm = () => {
  //constructor was here with "todo" state

  handleChanges = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };

  
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="todo"
          placeholder="Enter New Todo"
          value={this.state.todo}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  
}

export default TodoForm;