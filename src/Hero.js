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
        const imageSrc = `${this.props.config.iiif_url}/${this.props.image_id}/full/400,/0/default.jpg`
        return (
            <article className="hero">
                <img className="hero-image"
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
export default Hero

Hero.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    artist:  PropTypes.string,
    image_id: PropTypes.number,
    addFavorite: PropTypes.func,
    description: PropTypes.string
}