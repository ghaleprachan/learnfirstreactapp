import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 1,
      },
      {
        id: 3,
        value: 2,
      },
      {
        id: 4,
        value: 2,
      },
    ],
  };
  handleDelete = (counterId) => {
    // console.log(counterId)
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters, // this is to overrride state.counters with const counters where there is a same data except with the given id
    });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          >
            <h1>Counter #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
