const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();

var corsOptions = {
  origin: "https:8080//lucid-bhabha-9f48ff.netlify.app"
};

app.use(cors(corsOptions));

mongoose
  .connect("mongodb://localhost:27017/galerie", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Galerie." });
});

require("./subscribe.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
