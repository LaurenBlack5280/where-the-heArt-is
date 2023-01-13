import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Gallery from './Gallery';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/' render={Home}/>
          <Route path='/gallery' render={Gallery} />

        </Switch>
       
      </main>
    )
  }
}

export default App;
