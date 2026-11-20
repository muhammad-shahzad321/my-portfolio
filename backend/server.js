const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running! Contact Form Backend Ready ✅");
});

// Contact Form Route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Message:", name, email, message);
  res.send("Message received successfully!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
