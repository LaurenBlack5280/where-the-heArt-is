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
      data: [],
      config: {}, 
      myGallery: []
    }
  }

  addFavorite = (title) => { 
    console.log('hello')
    const favoriteArt = this.state.data.find(data => data.title === title)
    this.setState({ myGallery: [...this.state.myGallery, favoriteArt]})
  }

 

  componentDidMount() {
    fetch('https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=10&fields=id,title,image_id,artist_title,description')
    .then(res => res.json())
    .then(res => {
      console.log('response', res)
      this.setState({ 
        data: res.data,
        config: res.config
      })
    })
  }

  


  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route exact path='/' render={ () =>  
            <Home data={this.state.data} config={this.state.config} addFavorite={this.addFavorite}/> }/>
          <Route exact path='/gallery' render={ () =>
            <Gallery data={this.state.myGallery} config={this.state.config} addFavorite={this.addFavorite}/>} />
        </Switch>
      </main>
    )
  }
}

export default App;
