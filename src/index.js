const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const sectionsPath = path.join(__dirname, "../templates/sections");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
hbs.registerPartials(sectionsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("home", {
    data: [
      {
        title: "Major:",
        description: "Digital Marketing",
      },
      {
        title: "Minor:",
        description: "Graphic Design",
      },
    ],

    experienceArray: [
      {
        place: "Majestic Golf Course",
        date: "Summer 2018",
        title: "Player's Assistant",
      },
      {
        place: "America's Backyard",
        date: "March 2019 - February 2020",
        title: "Bartender",
      },
      {
        place: "America's Backyard",
        date: "March 2019 - February 2020",
        title: "Bartender",
      },
      {
        place: "America's Backyard",
        date: "March 2019 - February 2020",
        title: "Bartender",
      },
    ],
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
