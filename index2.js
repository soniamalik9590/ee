const http = require("http");
const express = require("express");

const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/about", function (req, res) {
  res.send("hello world");
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://:${port}/`);
});
