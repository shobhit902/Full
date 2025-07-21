import bodyParser from "body-parser";
import express, { application } from "express";
import { dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const today = new Date();
  let day = today.getDate();

  let type = "weekday";
  let adv = "time to work hard";

  if (day === 0 || day === 6) {
    type = "weekend";
    adv = "have some fun";
  }

  res.render("inde.ejs", {
    dayType: type,
    advice: adv,
  });
});
app.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
});
