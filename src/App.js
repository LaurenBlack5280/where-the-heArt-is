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
      data: [
        {id: 1, title: "Great Wave", artist_title: "An Artist", image_id: 123},
        {id: 2, title: "Mona Lisa", artist_title: "Another Artist", image_id: 456},
        {id: 3, title: "Chivalry", artist_title: "Jon Toms", image_id: 789},
      ],
      config: {
        iiif_url: "https://www.artic.edu/iiif/2"
      }
    }
   
  }

  render() {
    return (
      <main>
        <Navbar />
        <Home data={this.state.data} config={this.state.config} />
        {console.log('yo', this.state.data)}
        
        {/* <Switch>
          
          <Route exact path='/' component={Home} data={this.state.data} config={this.state.config}/>
          <Route path='/gallery' component={Gallery} />
        </Switch> */}
      </main>
    )
  }
}

export default App;
