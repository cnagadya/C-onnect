"use strict";

const express = require("express");
const mongoose = require("mongoose");

const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

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

// App routes
app.get("/", (req, res) => res.send("Hello Christine!"));
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server running on port ${port}`));
