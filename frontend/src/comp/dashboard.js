import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example state list
    setStates(["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu"]);
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Example districts
      setDistricts(["District 1", "District 2", "District 3"]);
    } else {
      setDistricts([]);
    }
  }, [selectedState]);

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);

    if (district) {
      // Example dummy data
      setData({
        employment: 1500,
        households: 320,
        expenditure: "₹12,40,000",
      });
    } else {
      setData(null);
    }
  };

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Select State and District</h2>

      <div className="filter-section">
        <label><b>State:</b>&nbsp;</label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>

        &nbsp;&nbsp;&nbsp;

        <label><b>District:</b>&nbsp;</label>
        <select
          value={selectedDistrict}
          onChange={(e) => handleDistrictSelect(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district}>{district}</option>
          ))}
        </select>
      </div>

      {data ? (
        <div className="data-display">
          <h3>District Performance</h3>
          <p><b>Employment Provided:</b> {data.employment}</p>
          <p><b>Households Covered:</b> {data.households}</p>
          <p><b>Total Expenditure:</b> {data.expenditure}</p>
        </div>
      ) : (
        <p className="message-text">
          Please select a district to view its performance.
        </p>
      )}
    </div>
  );
};

export default Dashboard;
