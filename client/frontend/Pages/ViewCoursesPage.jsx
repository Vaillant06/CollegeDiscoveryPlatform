
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../src/components/Navbar";

export  default function ViewCoursessPage() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/courses");
                const data = await response.json();

                setCourses(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCourses();
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
                        placeholder="Search Courses..."
                    />

                </div>
            </div>
            
            <div className="container mt-3">
                <div>
                    {courses.map(course => (
                        <div key={course.id} className="card shadow-sm p-3 mb-3">
                            <div className="d-flex justify-content-between mb-3">
                                <h5>{course.program} - {course.name}</h5>
                                <button className="badge bg-success p-3">
                                    <i className="bi bi-house-add me-2"></i>
                                    Offered by {course.colleges?.length || 0} College(s)
                                </button>
                            </div>
                            <div className="d-flex fs-5">
                                <p>
                                    <span className="badge bg-secondary px-2 mx-2">{course.stream}</span>
                                </p>
                                <p>
                                    <span className="badge bg-primary px-2 mx-2">{course.program}</span>
                                </p>
                                <p>
                                    <span className="badge bg-info px-2 mx-2">{course.duration} Years</span>
                                </p>
                            </div>
                            <hr className="hr my-4" />
                            <div>
                                {course.description && (    
                                    <p className="card-text">{course.description}</p>
                                )}
                            </div>
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