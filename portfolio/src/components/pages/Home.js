// this is the entire homepage that will be rendered in App.js
import React from 'react';
import '../../App.css';
// components
import Navbar from '../Navbar';
import Hero from '../Hero';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
export default Home;
