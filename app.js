const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
    const data = {
        status: 200,
        port: port,
        method: req.method,
        path: req.path,
        data: process.env.DATA
    }
    res.status(200).send(data);
})

app.get("/hello-world", async (req, res) => {
    const data = {
        status: 200,
        port: port,
        method: req.method,
        path: req.path,
        data: process.env.DATA
    }
    res.status(200).send(data);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})