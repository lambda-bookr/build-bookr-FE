import React, { Component } from 'react';
import './App.css'; 
import {Route, BrowserRouter as Router, NavLink } from 'react-router-dom'
import Footer from './components/footer'
import BookList from './components/bookList'

class App extends Component {
  render() {
    return (

      <div className="App">
      <div className="NavLinks">
      <NavLink to  ="#">Login</NavLink>
      <NavLink to = "#">Register</NavLink>
      <NavLink to = "#">Home</NavLink>
      </div>
        
      </div>
    );
  }
}

export default App;
