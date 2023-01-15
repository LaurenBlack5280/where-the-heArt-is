import React, {Component} from "react";
import './GalleryArt.css'

class GalleryArt extends Component {
    constructor() {
        super()
        this.state = {
            // isLoved: false
        }
    }

    render() {
        return (
            <article className="gallery-art">
                <img className="gallery-art-image"
                    src="https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg
                    "
                    alt="placeholder"
                />
                {/* <p>
                    <span>title:</span>
                    <span>artist:</span>
                </p> */}
            </article>
        )
    }
}

export default GalleryArt