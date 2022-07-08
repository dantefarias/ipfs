const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const apiKeyRoutes = require("./routes/apiKey");
const userRoutes = require("./routes/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/key", apiKeyRoutes);
app.use("/user", userRoutes);

app.use((_, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

module.exports = app;
