import { Component } from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <TodoListItem key={todo._id} {...todo} />
        ))}
      </>
    );
  }
}
