import { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import Filters from "../Filters/Filters";
import CollegeCard from "../CollegeCard/CollegeCard";
import Pagination from "../Pagination/Pagination";

import "./Home.css";

export default function Home() {
  const [colleges, setColleges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [ownerships, setOwnerships] = useState([]);
  const collegesPerPage = 10;

  const [filters, setFilters] = useState({
    states: [],
    cities: [],
    ownerships: [],
    rating: "",
    minFee: "",
    maxFee: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/colleges"
        );

        const data = await response.json();

        setColleges(data);
        setStates(
          [...new Set(data.map((college) => college.state))]
        );

        setCities(
          [...new Set(data.map((college) => college.city))]
        );

        setOwnerships(
          [...new Set(data.map((college) => college.ownership))]
        );

      } catch (error) {
        console.error(error);
      }
    };

    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter((college) => {
    const stateMatch =
      filters.states.length === 0 ||
      filters.states.includes(college.state);

    const cityMatch =
      filters.cities.length === 0 ||
      filters.cities.includes(college.city);

    const ownershipMatch =
      filters.ownerships.length === 0 ||
      filters.ownerships.includes(college.ownership);

    const ratingMatch =
      !filters.rating ||
      college.rating >= Number(filters.rating);

    const minFeeMatch =
      !filters.minFee ||
      college.fees >= Number(filters.minFee);

    const maxFeeMatch =
      !filters.maxFee ||
      college.fees <= Number(filters.maxFee);

    return (
      stateMatch &&
      cityMatch &&
      ownershipMatch &&
      ratingMatch &&
      minFeeMatch &&
      maxFeeMatch
    );
  });

  const indexOfLastCollege =
    currentPage * collegesPerPage;

  const indexOfFirstCollege =
    indexOfLastCollege - collegesPerPage;

  const currentColleges = filteredColleges.slice(
    indexOfFirstCollege,
    indexOfLastCollege
  );

  const totalPages = Math.ceil(
    filteredColleges.length / collegesPerPage
  );

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      {/* Hero */}
      <div className="container py-5 text-center">
        <h1 className="display-4 fw-bold">
          Find the right college for your future
        </h1>

        <p className="text-muted fs-5 mt-3">
          Search colleges, courses, exams, and placements
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0 px-2">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="text"
                className="form-control border-start-0 px-1"
                placeholder="Search Colleges, Exams, Courses..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container pb-5">
        <div className="row">

          {/* Sidebar */}
          <div className="col-lg-4 mb-4">
            <Filters 
              states={states}
              cities={cities}
              ownerships={ownerships}
              onFilterChange={handleFilterChange} 
            />
          </div>

          {/* Cards */}
          <div className="col-lg-8">

            <p className="text-muted fs-6 mb-3">
              Showing {filteredColleges.length} colleges
            </p>

            <div className="row g-4">
              {currentColleges.length > 0 ? (
                currentColleges.map((college) => (
                  <div
                    className="col-12"
                    key={college.id}
                  >
                    <CollegeCard college={college} />
                  </div>
                ))
              ) : (
                <p className="text-muted">
                  No colleges found matching your criteria.
                </p>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}