import React, { Component } from "react";
import "./Home.css"
import Hero from "./Hero";
import Artworks from "./Artworks";


const Home = ({ data, config, addFavorite }) => {
    
    return (
        <section className="home">
                <Hero data={data} config={config}  />
                <Artworks data={data} config={config} addFavorite={addFavorite}/>
        </section>
    )
}

export default Home