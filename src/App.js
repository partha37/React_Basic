import "./styles.css";
import react, { Component, useState } from "react";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "M Parthiban",
    color: "black"
  };

  usernamechangeHandler = (event) => {
    this.setState({
      username: event.target.value,
      color: "red"
    });
  };

  render() {
    return (
      <div>
        <UserInput
          change={this.usernamechangeHandler}
          fname={this.state.username}
        />
        <UserOutput style={this.state.color} username={this.state.username} />
        <UserOutput style={this.state.color} username={this.state.username} />
        <UserOutput username="Lokesh" />
      </div>
    );
  }
}

export default App;
