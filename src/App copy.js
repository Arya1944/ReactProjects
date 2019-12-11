import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/navbar";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Movies from "./components/movies";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  OnHandelIncrement = counter => {
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
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ];
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(f => f.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            OnHandelReset={this.OnHandelReset}
            OnHandelDecrement={this.OnHandelDecrement}
            OnHandelIncrement={this.OnHandelIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
