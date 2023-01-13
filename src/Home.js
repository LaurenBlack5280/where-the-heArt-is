import React, { Component } from "react";
import "./Home.css"
import Hero from "./Hero";
import Artworks from "./Artworks";


const Home = () => {
    return (
        <section className="home">
            <Hero />
            <Artworks />
        </section>
    )
}

export default Home