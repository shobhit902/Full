import bodyParser from "body-parser";
import { log } from "console";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandname = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandname = req.body["street"] + req.body["pet"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(bandNameGenerator);

app.post("/submit", (req, res) => {
  res.send(`<h1>Bandname </h1 >
    <p> Your bandname is ${bandname}</p>`);
});

app.listen(port, (req, res) => {
  console.log(`listening at port ${port}.`);
});

// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;
// var bandName = "";

// app.use(bodyParser.urlencoded({ extended: true }));

// function bandNameGenerator(req, res, next) {
//   console.log(req.body);
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// }

// app.use(bandNameGenerator);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/submit", (req, res) => {
//   res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
