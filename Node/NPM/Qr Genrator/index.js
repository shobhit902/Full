import inquirer from "inquirer";
import fs from "fs";

import qr from "qr-image";
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrimg.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("File saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

var qr_svg = qr.image("I love QR!", { type: "svg" });
