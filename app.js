const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.render("index");
});

//super form routes here
app.get("/get-user-info", (req, res) => {
  res.render("user-info-form");
});

app.get("/display-user-info", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let superhero = req.query.superhero;

  res.send(
    `
    <h2>Your name is ${name}</h2>
    <h3>Yur age is ${age}</h3>
    <h4>Your favorite superhero is ${superhero}</h4>
    `
  );
});

//a login form wuhuuu

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (email === "ironhacker" && password === "papapa") {
    res.send("welcome mate");
  } else {
    res.send("who the fuck are you");
  }

  //res.send(`Email: ${email}, Password: ${password}`);
});

app.listen(3000, () => {
  console.log("Congrats! Server running");
});
