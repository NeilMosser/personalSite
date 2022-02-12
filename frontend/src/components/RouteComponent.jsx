import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';

const RouteComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteComponent;