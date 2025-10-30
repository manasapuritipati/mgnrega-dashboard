const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Example cache (to avoid API rate limits)
let cache = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

// ✅ API route
app.get("/api/mgnrega/:state/:district", async (req, res) => {
  const { state, district } = req.params;
  const cacheKey = `${state}_${district}`;

  // Serve from cache if available and fresh
  if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < CACHE_DURATION) {
    console.log("Serving from cache");
    return res.json(cache[cacheKey].data);
  }

  try {
    // Example Open API endpoint
    const apiUrl = `https://api.data.gov.in/resource/<YOUR_API_ID>?api-key=${process.env.DATA_GOV_KEY}&format=json&filters[state_name]=${state}&filters[district_name]=${district}`;
    const response = await axios.get(apiUrl);

    // Store in cache
    cache[cacheKey] = {
      timestamp: Date.now(),
      data: response.data,
    };

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching MGNREGA data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
