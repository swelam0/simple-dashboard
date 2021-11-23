const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const Port = process.env.port || 4500;

// use public folder
app.use(express.static(path.join(__dirname, "public")));

// handlebars engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// import index route
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// server listen
app.listen(Port);
