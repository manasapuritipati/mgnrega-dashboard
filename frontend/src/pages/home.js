import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to the MGNREGA Data Dashboard</h1>
        <p>
          Visualize and explore the performance of the Mahatma Gandhi National
          Rural Employment Guarantee Act (MGNREGA) across different states and
          districts in India.
        </p>
        <button className="explore-btn" onClick={() => navigate("/dashboard")}>
          Explore Dashboard
        </button>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Real-Time Insights</h3>
          <p>
            Get updated information about work demand, fund allocation, and
            employment generation across regions.
          </p>
        </div>

        <div className="feature-card">
          <h3>Data Visualization</h3>
          <p>
            View data in graphical and tabular formats for better understanding
            and analysis.
          </p>
        </div>

        <div className="feature-card">
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
