const express = require("express");
const app = express();

app.get("/", async (req, res) => {
    res.send("Hi there");
})

app.get("/hello-world", async (req, res) => {
    res.send({ status: 200, message: "Hello world" });
})

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})