const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
    res.send("Hi there");
})

app.get("/hello-world", async (req, res) => {
    res.send({ status: 200, message: "Hello world", port: port });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})