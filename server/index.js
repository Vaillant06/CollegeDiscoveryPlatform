const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API running");
});

app.get("/api/message", (req, res) => {
    res.json({
        text: "Hello from Node!"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});