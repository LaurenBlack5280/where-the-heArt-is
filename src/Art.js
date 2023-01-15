import React, { Component } from "react";
import './Art.css'


class Art extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoved: false
        }
    }

    toggleLoved = () => {
        let userLoved = this.state.isLoved
        userLoved = !userLoved
        this.setState({ isLoved: userLoved })
    }

    render() {
        return (
            <article className="art">
                <img className="art-image"
                src="https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg
                "
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