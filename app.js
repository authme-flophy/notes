const express = require("express");
const mongoose = require("mongoose");
const notesRoutes = require("./routes/notesRoutes");
require("dotenv").config();

const app = express();

// mongo db uri
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.DATABASE_NAME}.i9ljoww.mongodb.net/${process.env.COLLECTION_NAME}`;

mongoose
  .connect(dbURI)
  .then((response) => app.listen("3000"))
  .catch((err) => console.error(err));

// register view engine
app.set("view engine", "ejs");

// function is used to extract the data from the request body and add it to the request object in the form of req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(notesRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
});
