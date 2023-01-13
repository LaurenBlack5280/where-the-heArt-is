import React from "react";
import './Gallery.js'
import GalleryArt from "./GalleryArt.js";

const Gallery = () => {
    return (
        <section className="gallery">
            <h1>I'm the Gallery</h1>
            <GalleryArt />
            <GalleryArt />
            <GalleryArt />
        </section>
    )
}

export default Gallery