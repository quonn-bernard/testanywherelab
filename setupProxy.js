const express = require("express");
const app = express();
const axios = require("axios");
const port = 3002;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", (res) => {
    axios.get("https://testanywhere-db-default-rtdb.firebaseio.com/data.json").then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
});

app.listen(port);
