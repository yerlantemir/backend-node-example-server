const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple endpoint qwlekqe
app.get("/api/hello", (req, res) => {
  // some logic...
  res.json({ message: "qelkqwelkqewljkljk", hello: "world" });
});

// For testing purposes
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
