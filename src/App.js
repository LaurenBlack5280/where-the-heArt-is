import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
// import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <main>
        <Navbar />
        <Home />
      </main>
    )
  }
}

export default App;
