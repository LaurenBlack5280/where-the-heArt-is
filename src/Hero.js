import React, { Component } from "react";
import "./Hero.css"
import PropTypes from 'prop-types'
class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoved: false,
        }
    }

    render() {
        return (
            <article className="hero">
                 <img className="hero-image"
                src="https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg
                "
                alt={this.props.description}
                />
                
                <h2>title:{this.props.title}</h2>
                <h3>artist:{this.props.artist_title}</h3>
                <button>♡</button>
            </article>
        )
    }
}

export default Hero

Hero.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist:  PropTypes.string.isRequired,
    image_id: PropTypes.number.isRequired,
    addFavorite: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired
}