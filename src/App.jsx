import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Discover beautiful houseplants for every room
          and every plant lover.
        </p>

        <Link
          to="/plants"
          className="get-started-btn"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>

    </div>
  );
}

export default App;
