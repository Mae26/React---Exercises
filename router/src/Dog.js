import React, { Component } from "react";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>Dog!!!</h1>
        <img
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80"
          alt="puppy"
        />
      </div>
    );
  }
}
export default Dog;
