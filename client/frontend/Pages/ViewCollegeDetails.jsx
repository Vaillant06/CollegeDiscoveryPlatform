import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import BreadCrumb from "../src/components/BreadCrumb";
import InfoTable from "../src/components/InfoTable";
import ReviewSection from "../src/components/ReviewSection";

export default function ViewCollegeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  const functionComingSoon = () => {
    window.alert("Functionality Coming Soon!");
  };

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/colleges/${id}`,
        );

        const data = await response.json();

        setCollege(data);
      } catch (error) {
        console.error("Error fetching college details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollege();
  }, [id]);

  if (loading) {
    return (
      <div className="p-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!college) {
    return <h3>College not found</h3>;
  }

  return (
    <>
      <Navbar />

      <div className="container-fluid bg-light">
        <div className="container card border-0 p-3 mt-1">
          <BreadCrumb college={college} />
          <div className="college-detail-header">
            <div className="logo">
              <img src="/collegeLogo.jpg" alt={college.name} />
            </div>

            <div className="college-name-location mx-4 mt-5">
              <h2>{college.name}</h2>
              <p className="text-muted">
                <i className="bi bi-geo-alt-fill me-2"></i>
                {college.city}, {college.state}
              </p>
            </div>

            <div>
              <span className="btn btn-lg btn-success mt-5">
                <i className="bi bi-star-fill me-2"></i>
                {college.rating}
              </span>
            </div>
          </div>

          <div className="card-body row mb-2">
            <div className="col-md-8 mx-3">
              <div className="row">
                <div className="col-md-6 fs-5 mt-2">
                  <div className="card shadow">
                    <p className="px-3 m-3">
                      <i className="bi bi-currency-rupee me-2 icon"></i>
                      {college.fees} Lakh/Year
                    </p>
                  </div>
                  <div className="card shadow mt-3">
                    <p className="px-3 m-3">
                      <i className="bi bi-award-fill me-2 icon"></i>
                      NIRF Ranking: {college.nirfRanking}
                    </p>
                  </div>
                </div>
                <div className="col-md-6 fs-5 mt-2">
                  <div className="card shadow">
                    <p className="px-3 m-3">
                      <i className="bi bi-graph-up-arrow me-2 icon"></i>
                      Placements Rate: {college.placementsRate}%
                    </p>
                  </div>
                  <div className="card shadow mt-3">
                    <p className="px-3 m-3">
                      <i className="bi bi-building-fill me-2 icon"></i>
                      {college.ownership}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-options col-md-4 mx-2">
              <button
                className="btn shadow btn-md btn-outline-warning mx-3"
                onClick={functionComingSoon}
              >
                <i className="bi bi-download me-2"></i>
                Brochure
              </button>
              <button
                className="btn shadow btn-md btn-outline-danger mt-3 mx-3"
                onClick={functionComingSoon}
              >
                <i className="bi bi-question-circle-fill me-2"></i>
                Enquire
              </button>
                <Link 
                  to={`/compare/${college.id}`}
                  className="btn btn-sm btn-outline-primary mt-3 mx-3">
                  <i className="bi bi-arrow-left-right me-2"></i>
                  Compare
                </Link>
            </div>
          </div>

          <div className="apply-now d-flex justify-content-center">
            <button
              className="btn btn-primary btn-lg my-3"
              onClick={functionComingSoon}
            >
              Apply Now !
            </button>
          </div>

          <div>
            <div className="courses-offered p-2">
              <h4>
                <i className="bi bi-book me-2"></i>
                Courses Offered
              </h4>
              {college.courses?.length > 0 ? (
                <div className="table-responsive mt-2">
                  <table className="table table-bordered table-striped table-hover">
                    <thead className="table-primary">
                      <tr>
                        <th>Course Name</th>
                        <th>Fees</th>
                        <th>Stream</th>
                        <th>Program</th>
                        <th>Duration</th>
                        <th>Apply</th>
                      </tr>
                    </thead>
                    <tbody>
                      {college.courses?.map((course) => (
                        <tr key={course.id}>
                          <td>{course.name}</td>
                          <td>{course.fees} Lakh/Year</td>
                          <td>{course.stream}</td>
                          <td>{course.program}</td>
                          <td>{course.duration} Years</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={functionComingSoon}
                            >
                              Apply Now
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted">To be updated soon.</p>
              )}
            </div>
          </div>

          <h4 className="fs-4 p-2">
            <i className="bi bi-info-circle me-2"></i>
            More Details
          </h4>
          <div className="card more-details shadow p-3">
            <p>{college.description}</p>
            <InfoTable college={college} />
          </div>

          <ReviewSection college={college} />

          <div className="p-2 mt-2">
            <p className="text-muted small">
              <i className="bi bi-clock-history me-2"></i>
              Last Updated At:{" "}
              {new Date(college.updatedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate(-1)}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Colleges
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
