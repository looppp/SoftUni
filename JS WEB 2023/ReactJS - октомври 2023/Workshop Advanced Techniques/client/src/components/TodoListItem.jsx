import { Component } from "react";
import { Card } from "antd";

export default class TodoListItem extends Component {
  render() {
    return (
      <Card
        title={this.props.firstName}
        style={{
          width: 300,
        }}
      >
        <p>{this.props.lastName}</p>
        <p>{this.props.email}</p>
      </Card>
    );
  }
}
