import React from "react";
import './Gallery.js'
// import GalleryArt from "./GalleryArt.js";
import Art from "./Art.js";
import Artworks from "./Artworks.js";

const Gallery = ({ data, config, addFavorite }) => {
    return (
        <section className="gallery">
            <h1>My Gallery</h1>
            <h2>Here is your personally curated collection</h2>
            <Artworks data={data} config={config} addFavorite={addFavorite}/>

        </section>
    )
}


// const Gallery = () => {
//     return (
//         <section className="gallery">
//             <h1>I'm the Gallery</h1>
//             <GalleryArt />
//             <GalleryArt />
//             <GalleryArt />
//         </section>
//     )
// }

export default Gallery