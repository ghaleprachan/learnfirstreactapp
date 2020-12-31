import React, { Component } from "react";
import "./counters";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: [],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There is no tags</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  handleIncrement = () => {
    // this will increte the count but react will not update the view
    // just like in flutter we have to set set state ment here too.
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log(this.props.value);
    return (
      <React.Fragment>
        <div>
          {this.props.children}
          <h1 style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </h1>

          <button
            onClick={() => this.handleIncrement({ id: 1 })}
            style={{ fontSize: 20 }}
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.id)}
            style={{ fontSize: 20 }}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        {/* <div>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </div> */}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
