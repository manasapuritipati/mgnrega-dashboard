import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About MGNREGA Dashboard</h2>
      <p>
        The <strong>Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)</strong> 
        aims to enhance livelihood security in rural areas by providing at least 
        100 days of wage employment to every household whose adult members volunteer 
        to do unskilled manual work.
      </p>

      <p>
        This dashboard provides insights into state and district-level performance 
        under the MGNREGA scheme, including job creation, fund utilization, and 
        project completion rates. It helps visualize data trends and enables 
        better transparency and accountability.
      </p>

      <div className="about-features">
        <h3>Features</h3>
        <ul>
          <li>View performance by state and district</li>
          <li>Track key metrics like employment days and funds used</li>
          <li>Interactive and user-friendly interface</li>
          <li>Supports data-driven rural development planning</li>
        </ul>
      </div>

      <footer className="footer-bottom">
        © 2025 MGNREGA Dashboard | Developed for learning & analysis
      </footer>
    </div>
  );
};

export default About;
