
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../src/components/Navbar";

export  default function ViewExamsPage() {


    const [exams, setExams] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredExams =
    searchTerm.length > 0
        ? exams.filter((exam) =>
            exam.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
        : exams;

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/exams");
                const data = await response.json();

                setExams(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchExams();
    }, []);


    return(
        <>
        <Navbar />

        <div className="container-fluid bg-light">
            <div className="container d-flex justify-content-center align-items-center"> 
                <div className="hero-search input-group my-3">
                    <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search Exams..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    />

                </div>
            </div>
            
            <div className="container mt-3">
                <div>
                    {filteredExams.map(exam => (
                        <div key={exam.id} className="card p-3 mb-3">
                            <div className="d-flex justify-content-between mb-3">
                                <h5>{exam.name}</h5>
                                <button className="badge bg-primary">{exam.colleges?.length || 0} College(s)</button>
                            </div>
                            <ul>
                            {exam.colleges?.map((c) => (
                                <li key={c.id}>
                                {c.name}
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-end pb-4">
                    <Link 
                        to="/"
                        className="btn btn-outline-secondary"
                    >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}