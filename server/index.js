const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

const collegeRoutes = require("./routes/collegeRoutes");
const examRoutes = require("./routes/examRoutes");
const predictorRoutes = require("./routes/predictorRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use(cors());
app.use(express.json());


// College Routes
app.get("/", (req, res) => {
    res.send("API running");
});

app.use("/api/colleges", collegeRoutes);



// Exam Routes
app.use("/api/exams", examRoutes);



// Course Routes
app.use("/api/courses", courseRoutes);



// Predict Routes
app.use("/api/predictor", predictorRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});