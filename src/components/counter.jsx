import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //do stuff...
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  /*state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tage2", "tag3"]
  };*/

  /*handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };*/

  render() {
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
