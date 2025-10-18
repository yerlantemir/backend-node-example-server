const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Ubuntu server!", timestamp: new Date() });
});

// For testing purposes
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
