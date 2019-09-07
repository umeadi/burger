var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended : false }))

app.use(methodOverride("method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes");
app.use("/", routes);

var port = 3000;
app.listen(port, function(){
    console.log("*******************************");
    console.log("App now listening on port: " + port);
    console.log("*******************************");
});