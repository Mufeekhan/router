import React, { Component } from "react";

class Addninja extends Component {
  state = {
    name: null,
    age: null,
    belts: null
  };
  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handlechange} />
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handlechange} />
          <label htmlFor="name">Belts:</label>
          <input type="text" id="belts" onChange={this.handlechange} />
          <button>Submmit</button>
        </form>
      </div>
    );
  }
}

export default Addninja;
