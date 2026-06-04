import { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import Filters from "../Filters/Filters";
import CollegeCard from "../CollegeCard/CollegeCard";

import "./Home.css";

export default function Home() {
  const [colleges, setColleges] = useState([]);

  const [filters, setFilters] = useState({
    states: [],
    cities: [],
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchColleges();
  }, []);

  console.log(filters);

  const filteredColleges = colleges.filter((college) => {
    const stateMatch =
      filters.states.length === 0 ||
      filters.states.includes(college.state);

    const cityMatch =
      filters.cities.length === 0 ||
      filters.cities.includes(college.city);

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
      ratingMatch &&
      minFeeMatch &&
      maxFeeMatch
    );
  });

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
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              placeholder="Search colleges..."
            />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container pb-5">
        <div className="row">

          {/* Sidebar */}
          <div className="col-lg-4 mb-4">
            <Filters onFilterChange={handleFilterChange} />
          </div>

          {/* Cards */}
          <div className="col-lg-8">
          <div className="college-card row g-4">
            {filteredColleges.length > 0 ? (filteredColleges.map((college) => (
              <div className="col-12" key={college.id}>
                <CollegeCard college={college} />
              </div>
            ))) : (
              <p className="text-muted">No colleges found matching your criteria.</p>
            )}
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}