import React, { Component } from "react";
import './Art.css'


class Art extends Component {
    constructor(props) {
        super(props)
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
        // if(this.state.isLoved) {
        //     console.log(this.state.isLoved)
            this.props.addFavorite(this.props.title)
         }
        //What
        //if the art is loved
        //  display it in gallery
        //How
        //write a function that filters through the data
        //  and checks whether the art is loved is true
        //      create a list for my gallery of art where isLoved is true
        //          
 
    // handleChange = event => {
    //     this.setState({ [event.tartget.name]: event.target.value})
    // }
    

    render() {
        const imageSrc = `${this.props.config.iiif_url}/${this.props.image_id}/full/400,/0/default.jpg`
        return (
            <article className="art">
                <img className="art-image"
                src={imageSrc}
                alt={this.props.description}
                />
                <form>
                
                    <h3>title:{this.props.title}</h3>
                    <h4>artist:{this.props.artist_title}</h4>
                    <button name='isLoved' value={this.state.isLoved} onClick={(event) => this.toggleLoved(event)}>
                    {!this.state.isLoved ? (
                        <label>♡</label>
                    ) : (
                        <label>❤️</label> 
                    ) }
                    </button>
                </form>
            </article>
        )
    }
}

export default Art