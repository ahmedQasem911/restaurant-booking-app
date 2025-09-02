import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/restaurant-food.jpg"

function Header() {
  return (
    <header className="header">
      <section>
        {/* Banner Text */}
        <div role="banner" className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        {/* Banner Image */}
        <div className="banner-img">
            <img src={bannerImg} alt="banner-image" />
        </div>
      </section>
    </header>
  );
}

export default Header;
