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
      data: [],
      config: {
        // iiif_url: ""
      }, 
      // myGallery: []
    }
  }

  addFavorite = id => { 
    const favoriteArt = this.state.data.filter(data => data.id === id)
    this.setState({ myGallery: favoriteArt})
   
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

  

  getImages = () => {
    // endpoint + image_id + /full/843,/0/default.jpg
    const imageId = this.state.data.map(data => data.image_id)
    const endpoint = this.state.config.iiif_url
    const imageSize = '/full/400,/0/default.jpg'
    const url = `${endpoint}${imageId}${imageSize}`
    const promise = fetch(url)
    .then(res => res.json())
    return promise
  }

  render() {
    return (
      <main>
        <Navbar />
        <Home data={this.state.data} config={this.state.config} addFavorite={this.addFavorite}/>

        
        {/* <Switch>
          
          <Route exact path='/' component={Home} data={this.state.data} config={this.state.config}/>
          <Route path='/gallery' component={Gallery} />
        </Switch> */}
      </main>
    )
  }
}

export default App;
