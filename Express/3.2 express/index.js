import express from "express";

const app = express();

const port = 3000;

// app.get("/", (req, res) => {

//   res.send("Helllo world!")
//   res.send("<h1>Hello</h1>")
// });

app.listen(port, () => {
  console.log(`Server has started at port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the homePage</h1>
         <p>This is the home page of the port ${port}</p>
         <p>Server is restarting </p>
         `);
});

app.get("/about", (req, res) => {
  res.send(`<p>My self invi the great hahahaha</p>`);
});

app.get("/contact", (req, res) => {
  res.send(`<p>phone number 7983243891</p>`);
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/sho", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/sho", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/sho", (req, res) => {
  res.sendStatus(200)
});
