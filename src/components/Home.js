import React, { Component } from "react";
import Hero from "./Hero";
import Books from "./Books";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Books />
      </div>
    );
  }
}

export default Home;
