import React, { Component } from "react";
import './Art.css'
import PropTypes from "prop-types";


class Art extends Component {
    constructor() {
        super()
        this.state = {
            isLoved: false,
            myGallery: []
        }
    }

    toggleLoved = () => {
        console.log(this.state.isLoved)

        let userLoved = this.state.isLoved
        userLoved = !userLoved
        this.setState({ 
            isLoved: userLoved 
        })
            this.props.addFavorite(this.props.title)
         }
         render() {
        console.log('props', this.props)
        const imageSrc = `${this.props.config.iiif_url}/${this.props.image_id}/full/400,/0/default.jpg`
        return (
            <article className="art">
                <img className="art-image"
                src={imageSrc}
                alt={this.props.description}
                />
                    <h3>title:{this.props.title}</h3>
                    <h4>artist:{this.props.artist_title}</h4>
                    <button name='isLoved' value={this.state.isLoved} onClick={(event) => this.toggleLoved(event)}>
                    {!this.state.isLoved ? (
                        <label>♡</label>
                    ) : (
                        <label>❤️</label> 
                    ) }
                    </button>
            </article>
        )
    }
}

export default Art

Art.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist:  PropTypes.string.isRequired,
    image_id: PropTypes.number.isRequired,
    addFavorite: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired
}