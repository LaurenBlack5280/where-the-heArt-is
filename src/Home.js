import React, { Component } from "react";
import "./Home.css"
import Hero from "./Hero";
import Artworks from "./Artworks";


const Home = ({ data, config }) => {
    //console.log(props.data)
    console.log('home', data)
    console.log('config', config)
    return (
        <section className="home">
                <Hero data={data} config={config}/>
                <Artworks data={data} config={config}/>
        </section>
    )
}

export default Home