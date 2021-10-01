// this is the entire homepage that will be rendered in App.js
import React from 'react';
import '../../App.css';
// components
import Navbar from '../Navbar';
import Hero from '../Hero';
import Work from '../Work';
import About from '../About';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Footer />
    </>
  );
}
export default Home;
