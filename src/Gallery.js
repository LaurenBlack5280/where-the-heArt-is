import React from "react";
import './Gallery.js'
// import GalleryArt from "./GalleryArt.js";
import Artworks from "./Artworks.js";
import PropTypes from "prop-types";

const Gallery = ({ data, config, addFavorite }) => {
    return (
        <section className="gallery">
            <h1>My Gallery</h1>
            <h2>Here is your personally curated collection</h2>
            <Artworks data={data} config={config} addFavorite={addFavorite}/>

        </section>
    )
}

export default Gallery
Artworks.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.string.isRequired,
    addFavorite: PropTypes.func.isRequired
}