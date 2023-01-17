import React from "react";
import './Artworks.css'
import Art from "./Art";
import PropTypes from "prop-types";


const Artworks = ({ data, config, addFavorite }) => {
    console.log('info', data)
    const artCards = data.map(artPiece => {
        console.log('art', artPiece)
        return (
            <Art
            key={artPiece.id}
            id={artPiece.id} 
            title={artPiece.title}
            artist_title={artPiece.artist_title}
            description={artPiece.description} 
            image_id={artPiece.image_id}
            config={config}
            addFavorite={addFavorite}
            // isLoved={isLoved}
            />
        )
    })

    return (
        <div className="artworks-container">
        {artCards}
        {console.log('art cards', artCards)}
        </div>
        
    )
}

export default Artworks

Artworks.propTypes = {
    data: PropTypes.array.isRequired,
    // config: PropTypes.object.isRequired,
    addFavorite: PropTypes.func.isRequired
}