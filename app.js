const express = require("express");
const path = require("path");

const app = express();
const Port = process.env.port || 4500;

app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(Port);
