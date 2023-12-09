import { Component } from "react";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Result } from "antd";
import TodoList from "./components/TodoList";

const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

class App extends Component {
  //creates the class instance
  constructor(props) {
    //basic constructor
    super(props);

    //there can be only one state!
    this.state = {
      todos: [],
      name: "Pesho",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("http://localhost:3030/jsonstore/users")
      .then((res) => res.json())
      .then((result) => {
        console.log(Object.values(result));
        this.setState({
          todos: Object.values(result),
        });
      });
  }
  render() {
    return (
      <>
        <Menu mode="horizontal" items={items} />
        <h1>{this.state.name}</h1>

        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default App;
