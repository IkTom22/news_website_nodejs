const express = require("express");

const app = express();
const port = 5000;

// Static files
// __dirname is root directory
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

//Templating engine
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//Routes - homepage , which is '/' is using newsRouter
const newsRouter = require("./src/routes/news");

app.use("/", newsRouter);
app.use("/article", newsRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));
