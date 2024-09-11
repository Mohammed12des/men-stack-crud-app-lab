require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");

require("./config/database");

const Clothing = require("./modules/clothing");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/clothing/new", async (req, res) => {
  res.render("clothing/new.ejs");
});
app.post("/clothing", async (req, res) => {
  await Clothing.create(req.body);
  res.redirect("/clothing/new");
});

app.get("/clothing", async (req, res, next) => {
  const allclohting = await Clothing.find();
  res.render("clothing/index.ejs", { clothing: allclohting });
});

app.get("/clothing/:id", async (req, res, next) => {
  const foundClothing = await Clothing.findById(req.params.id);
  res.render("clothing/show.ejs", { clothing: foundClothing });
});

app.delete("/clothing/:id", async (req, res, next) => {
  await Clothing.findByIdAndDelete(req.params.id);
  res.redirect("/clothing");
});

app.get("/clothing/:id/edit", async (req, res) => {
  const foundClothing = await Clothing.findById(req.params.id);
  res.render("clothing/edit.ejs", {
    clothing: foundClothing,
  });
});

app.put("/clothing/:id", async (req, res) => {
  await Clothing.findByIdAndUpdate(req.params.id, req.body);

  res.redirect(`/clothing/${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
