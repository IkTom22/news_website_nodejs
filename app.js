const express = require("express");
const app = express();
const port = 5000;
app.set("views engine", "ejs");

app.listen(port, () => console.log(`App listening on port ${port}`));