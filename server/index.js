const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

const collegeRoutes = require("./routes/collegeRoutes");

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

app.use("/api/colleges", collegeRoutes);
app.use

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});