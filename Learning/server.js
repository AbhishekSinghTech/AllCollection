const express = require("express");
const app = express();
const port = 8081;

// Middleware bodyparser

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

// database
const db = require("./db");

// models/person


app.get("/", (req, res) => {
  res.send("Welcome in my new page");
});


// Import Person routes
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItem');
// use routes
app.use('/person',personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(port, (req, res) => {
  console.log(` Server is Start http://localhost:${port}`);
});
