import React, { Component } from "react";

class Timer extends Component {
  state = {
    timeRemaining: 10,
  };
  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ timeRemaining: this.state.timeRemaining - 1 });
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }
  componentDidUpdate() {
    console.log("update");
  }

  render() {
    return (
      <div>
        <h2>{this.state.timeRemaining}</h2>
      </div>
    );
  }
}
export default Timer;
