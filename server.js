
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON requests
app.use(express.json());

// Serve HTML, CSS, and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

// API endpoint for showroom information
app.get("/api/showroom", (req, res) => {
  res.json({
    name: "M&M Car Showroom",
    message: "Find your dream car with M&M!",
    cars: [
      { id: 1, name: "Hyundai Creta", price: 1100000 },
      { id: 2, name: "Tata Nexon", price: 850000 },
      { id: 3, name: "Mahindra Thar", price: 1400000 }
    ]
  });
});

// Start the web server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`M&M Car Showroom running on port ${PORT}`);
});

