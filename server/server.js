const express = require("express");
const mongoose = require("mongoose");

const app = express();

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch(error =>
    console.log(
      error,
      "Update the mongoURI in the keys file with the right credentials "
    )
  );

app.get("/", (req, res) => res.send("Hello Christine!"));

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server running on port ${port}`));
