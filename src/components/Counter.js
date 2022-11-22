import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("---------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("Render");
    return (
      <div className="row p-4 m-4">
        <button onClick={this.decrement}>decrement</button>
        <div className="p-2">Counter: {this.state.counter}</div>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did update");
    console.log("---------------------");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
    console.log("---------------------");
  }
}

// {this.state.mount ? <Counter /> : null}
// <div className="row p-4 m-4">
//   <button onClick={this.mountCounter} disabled={this.state.mount}>
//     Mount
//   </button>
//   <button onClick={this.unmountCounter} disabled={!this.state.mount}>
//     unMount
//   </button>
// </div>
