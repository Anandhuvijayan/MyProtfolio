import React, { Component } from "react";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Resume from "./components/resume";
import Blog from "./components/blog";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Blog></Blog>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
