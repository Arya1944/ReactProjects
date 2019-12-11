import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  /*state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };*/

  /* OnHandelIncrement = counter => {
    // this.setState({ value: this.state.value + 1 });
    //alert("test" + counter.value);
    const counters = [...this.state.counters];
    //alert("test" + counters.length);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  OnHandelDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  OnHandelReset = () => {
    const counters = [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ];
    this.setState({ counters });
  };*/

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.props.OnHandelReset}>
          Reset
        </button>
        <ui>
          {this.props.counters.map(counter => (
            <li>
              <Counter
                counter={counter}
                key={counter.id}
                value={counter.value}
                onIncrement={this.props.OnHandelIncrement}
                onDecrement={this.props.OnHandelDecrement}
                id={counter.id}
              />
            </li>
          ))}
        </ui>
      </div>
    );
  }
}

export default Counters;
