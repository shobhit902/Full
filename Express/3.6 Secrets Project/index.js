//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let userAuth = false;


function password(req, res, next) {
  if (req.body["password"] === "ILoveProgramming") {
    userAuth = true;
  }
  next();
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(password)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(req.body);
});

app.post("/check", (req, res) => {
  if (userAuth) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
app.listen(port, (req, res) => {
  console.log(`Listening at the port ${port}.`);
});
