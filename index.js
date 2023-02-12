const express = require("express");
const app = express();
const path = require("path");

// set the public directory to serve static resources
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  // flush the head section right away so that downloading of css can start on browser
  // before server renders the full html page and send to the browser

  res.write("<html>");
  res.write("<head><link rel='stylesheet' type='text/css' href='style.css' /></head>");

  // flush the header which has a static resource logo
  res.write("<body>");
  res.write(`<div class= "toolbar"">
  <img width="40" src="logo.png">
</div>`);

  res.write('<div class="content">');

  setTimeout(() => {
    // flush the left navigation after 2000 ms
    res.write("<div id='left-nav'>left nav</div>");
  }, 2000);

  setTimeout(() => {
    // flush the middle content after 2500 ms
    const message = "Hello there!";
    res.write(`<div id='middle'>${message}</div>`);
  }, 2500);

  setTimeout(() => {
    // flush the right content after 3000 ms
    res.write("<div id='right-nav'>right nav</div>");
  }, 3000);

  setTimeout(() => {
    res.write("</div>");
  }, 3000);

  setTimeout(() => {
    // flush the footer
    res.write("<footer>copyright</footer>");
  }, 3000);

  // flush the closing html tag and end the response at 3000 ms
  setTimeout(() => {
    res.write("</body>");
    res.write("</html>");
    res.end();
  }, 3000);
});

app.listen(8080);
