import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("plants")}>
            Plants
          </button>

          <button onClick={() => setPage("about")}>
            About Us
          </button>

          <Link to="/cart">
            Cart
          </Link>
        </div>
      </nav>

      {page === "home" && (
        <section className="hero-section">

          <div className="hero-content">
            <h1>Paradise Nursery</h1>

            <h2>
              Bring Nature Into Your Home
            </h2>

            <p>
              Discover beautiful houseplants for every room
              and every plant lover.
            </p>

            <button
              className="get-started-btn"
              onClick={() => setPage("plants")}
            >
              Get Started
            </button>
          </div>

        </section>
      )}

      {page === "plants" && <ProductList />}

      {page === "about" && <AboutUs />}

    </div>
  );
}

export default App;
