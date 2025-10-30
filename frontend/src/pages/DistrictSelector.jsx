import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to the MGNREGA Data Dashboard</h1>
        <p>
          Visualize and explore the performance of the Mahatma Gandhi National
          Rural Employment Guarantee Act (MGNREGA) across different states and
          districts in India.
        </p>
        <Link to="/dashboard" className="explore-btn">
          Explore Dashboard
        </Link>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-card">
          <h3>Real-Time Insights</h3>
          <p>
            Get updated information about work demand, funds allocation, and
            employment generation across regions.
          </p>
        </div>
        <div className="info-card">
          <h3>Data Visualization</h3>
          <p>
            View data in graphical and tabular formats for better understanding
            and analysis.
          </p>
        </div>
        <div className="info-card">
          <h3>Comparative Analysis</h3>
          <p>
            Compare different districts and states to identify trends and
            performance levels.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
