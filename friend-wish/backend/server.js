const express = require("express");
const path = require("path");

const app = express();

// static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/wish", (req, res) => {
  res.json({ message: "Tu sirf dost nahi, family hai ❤️" });
});

// server start
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
