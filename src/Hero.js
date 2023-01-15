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
                    src=""
                    alt="placeholder"
                />
                <h2>title: </h2>
                <h3>artist: </h3>
            </article>
        )
    }
}

export default Hero