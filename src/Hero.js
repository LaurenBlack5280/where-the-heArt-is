import React, { Component } from "react";
import "./Hero.css"

class Hero extends Component {
    constructor() {
        super()
        this.state = {
            isLoved: false,
        }
    }

    render() {
        return (
            <article>
                <img className="hero-image"
                    src="https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg
                    "
                    alt="placeholder"
                />
                <h2>title: </h2>
                <h3>artist: </h3>
            </article>
        )
    }
}

export default Hero