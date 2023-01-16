import React, { Component } from "react";
import './Art.css'


class Art extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoved: false,
            // myGallery: []
        }
    }

    toggleLoved = () => {
        let userLoved = this.state.isLoved
        userLoved = !userLoved
        this.setState({ 
            isLoved: userLoved 
        })
        console.log(this.props.image_id)
        console.log('url i made', this.props.config.iiif_url + this.props.image_id + '/full/400,/0/default.jpg')
        console.log('resource https://www.artic.edu/iiif/2/0675f9a9-1a7b-c90a-3bb6-7f7be2afb678/full/200,/0/default.jpg')
        // this.props.addFavorite(id)
        // console.log('hopeful', this.state.myGallery)
    }

    

    render() {
        // const imageSrc = this.props.config.iiif_url + this.props.image_id + '/full/400,/0/default.jpg'
        const imageSrc = `${this.props.config.iiif_url}/${this.props.image_id}/full/400,/0/default.jpg`
        return (
            <article className="art">
                <img className="art-image"
                // src="https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg
                // "
                // src={ `${this.props.config.iiif_url}${this.props.image_id}/full/400,/0/default.jpg` }
                // src={
                //     fetch(this.props.config.iiif_url + this.props.image_id + '/full/400,/0/default.jpg')
                // }
                // src={this.props.config.iiif_url + this.props.image_id + '/full/400,/0/default.jpg'}
                src={imageSrc}
                alt={this.props.description}
                />

                
                <h3>title:{this.props.title}</h3>
                <h4>artist:{this.props.artist_title}</h4>
                <button onClick={() => this.toggleLoved()}>
                {!this.state.isLoved ? (
                    <label>♡</label>
                ) : (
                    <label>❤️</label> 
                ) }
                </button>
                {/* when a user clicks,
                    1. change heart red
                    2. update isLoved prop to true
                    3. add art to gallery to be rendered */}
            </article>
        )
    }
}

export default Art