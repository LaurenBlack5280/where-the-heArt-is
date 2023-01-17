import React, { Component } from "react";
import "./Home.css"
import Hero from "./Hero";
import Artworks from "./Artworks";
import PropTypes from "prop-types";


const Home = ({ data, config, addFavorite }) => {
    
    return (
        <section className="home">
                <Hero data={data} config={config}  addFavorite={addFavorite}/>
                <Artworks data={data} config={config} addFavorite={addFavorite}/>
        </section>
    )
}

export default Home

Home.propTypes = {
    data: PropTypes.array.isRequired,
    // config: PropTypes.object.isRequired,
    addFavorite: PropTypes.func.isRequired
}