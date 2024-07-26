require('dotenv').config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require('morgan');

require('./config/database');
const clothing = require("./modules/clothing");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan ('dev'));



  
  


app.get("/", async (req, res) => {
    res.render("index.ejs")
  });

  app.get('/clothing/new', async(req,res)=>{
   res.render("clothing/new.ejs")

  })
  app.post("/clothing", async (req, res) => {
    console.log(req.body)
    await Movie.create(req.body);
    res.redirect("/clothing/new");
});



app.post("/clothing", async (req, res) => {
    console.log(req.body);
    res.redirect("/clothing/new");
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});