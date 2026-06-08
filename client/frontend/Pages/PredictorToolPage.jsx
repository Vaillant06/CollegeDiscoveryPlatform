
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../src/components/Navbar";

export default function PredictorToolPage() {

    const navigate = useNavigate();

    const [exams, setExams] = useState([]);
    const [selectedExam, setSelectedExam] = useState("");
    const [predictedColleges, setPredictedColleges] = useState([]);

    useEffect(() => {
        const fetchExams = async () => {
            try {
            const response = await fetch(
                "http://localhost:5000/api/exams"
            );

            const data = await response.json();

            setExams(data);
            } catch (error) {
            console.error(error);
            }
        };

        fetchExams();
    }, []);

    const handlePredict = async () => {
        try {
             const response = await fetch(
                "http://localhost:5000/api/predictor",
                {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    examId: selectedExam,
                    }),
                }
            );
            const data = await response.json();
            setPredictedColleges(data);
    
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <Navbar />
        <div className="container bg-light mt-2"> 
            <h4 className="text-center">Predictor</h4>  

            <div className="row d-flex justify-content-center mt-3">
                <div className="col-md-4">
                    <label htmlFor="exam" className="form-label mt-3">Select Exam</label>

                    <select id="exam" className="form-select" value={selectedExam}
                    onChange={(e) =>
                        setSelectedExam(e.target.value)
                    }
                    >
                    <option value="">-- Select Exam --</option>

                    {exams.map((exam) => (
                        <option
                        key={exam.id}
                        value={exam.id}
                        >
                        {exam.name}
                        </option>
                    ))}
                    </select>

                    <label htmlFor="exam" className="form-label mt-3">Rank</label>
                    <input type="text" className="form-control" placeholder="Enter your rank"/>
                    
                    <label htmlFor="exam" className="form-label mt-3">Gender</label>
                    <select name="gender" id="gender" className="form-select">
                        <option value="">-- Select Gender --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="exam" className="form-label mt-3">Category</label>
                    <select name="category" id="category" className="form-select">
                        <option value="">-- Select Category --</option>
                        <option value="general">General</option>
                        <option value="obc">OBC</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                    </select>

                    <label htmlFor="exam" className="form-label mt-3">Gender</label>
                    <select name="gender" id="gender" className="form-select">
                        <option value="">-- Select Gender --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <button    
                    className="btn btn-primary mx-2"
                    onClick={handlePredict}
                >
                <i className="bi bi-lightbulb me-2"></i>
                Suggest Colleges
                </button>

                <button
                    className="btn btn-outline-secondary mx-2"
                    onClick={() => navigate(-1)}
                >
                <i className="bi bi-arrow-left me-2"></i>
                Back
                </button>
            </div>

            <div className="card text-center mt-5">
                    {predictedColleges.length > 0 && (
                    <>
                    <h4 className="my-3">Predicted Colleges</h4>
                    <div className="predicted-colleges">
                        {predictedColleges.map((college) => (
                            <li key={college.id}>{college.name}</li>
                        ))}
                    </div>
                    </>
                )}
            </div>
        </div>
        
        </>
    );
}