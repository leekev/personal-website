var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/about", function(req, res) {
	res.render("about");
});

app.get("/*", function(req, res) {
  res.redirect("/");
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
// app.listen(process.env.PORT, process.env.IP);