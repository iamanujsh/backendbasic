import express from "express";
import "dotenv/config";

const app = express();

// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Baby  i am listing");
});

app.get("/twitter", (req, res) => {
  res.send("iamanujsh");
});

app.get("/login", (req, res) => {
  res.send("please Enter Your Email and password");
});

app.get("/signup", (req, res) => {
  res.send("Welcome to sign up page");
});

app.get("/chai", (req, res) => {
  res.send("<h1>wow tea</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("I am listing at port 300");
});
