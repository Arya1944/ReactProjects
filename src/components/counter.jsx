import React, { Component } from "react";

class Counter extends Component {
  /* constructor() {
    super();
    this.state = {
      count: 0,
      tags: ["T1", "T2", "T3"]
    };
    this.increment = this.increment.bind(this);
  }*/
  /* state = {
    value: this.props.value,
    tags: ["T1", "T2", "T3"]
  };
  increment = () => {
    this.setState({ value: this.state.value + 1 });
    //alert("test" + this.state.count.toString());
  };
  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };*/

  render() {
    return (
      <React.Fragment>
        <span className={this.getBagClasses(this.props.counter.value)}>
          {this.props.counter.value === 0 ? "Zero" : this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() =>
            this.props.counter.value > 0
              ? this.props.onDecrement(this.props.counter)
              : false
          }
          className="btn btn-danger btn-sm"
        >
          -
        </button>
      </React.Fragment>
    );
  }
  getBagClasses(value) {
    let bag = "badge m-2 badge-";
    return bag + (value === 0 ? "warning" : "primary");
  }
  makeList() {
    // {this.makeList()}
    return (
      <div>
        <ui>
          {this.state.tags.map(t => (
            <li key={t}> {t} </li>
          ))}
        </ui>
      </div>
    );
  }
}

export default Counter;
