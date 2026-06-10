import { useState, useEffect, useCallback } from "react";

import Navbar from "../src/components/Navbar";
import Filters from "../src/components/Filters";
import CollegeCard from "../src/components/CollegeCard";
import Pagination from "../src/components/Pagination";
import Hero from "../src/components/Hero";

export default function Home() {
  const [colleges, setColleges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [ownerships, setOwnerships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const collegesPerPage = 10;

  const [filters, setFilters] = useState({
    states: [],
    cities: [],
    ownerships: [],
    rating: "",
    minFee: "",
    maxFee: "",
  });

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/colleges");

        const data = await response.json();

        setColleges(data);
        setStates([...new Set(data.map((college) => college.state))]);

        setCities([...new Set(data.map((college) => college.city))]);

        setOwnerships([...new Set(data.map((college) => college.ownership))]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter((college) => {
    const stateMatch =
      filters.states.length === 0 || filters.states.includes(college.state);

    const cityMatch =
      filters.cities.length === 0 || filters.cities.includes(college.city);

    const ownershipMatch =
      filters.ownerships.length === 0 ||
      filters.ownerships.includes(college.ownership);

    const ratingMatch =
      !filters.rating || college.rating >= Number(filters.rating);

    const minFeeMatch =
      !filters.minFee || college.fees >= Number(filters.minFee);

    const maxFeeMatch =
      !filters.maxFee || college.fees <= Number(filters.maxFee);

    return (
      stateMatch &&
      cityMatch &&
      ownershipMatch &&
      ratingMatch &&
      minFeeMatch &&
      maxFeeMatch
    );
  });

  const indexOfLastCollege = currentPage * collegesPerPage;

  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;

  const currentColleges = filteredColleges.slice(
    indexOfFirstCollege,
    indexOfLastCollege,
  );

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      {/* Hero */}
      <Hero
        colleges={colleges}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Main */}
      <div className="container pb-5 mt-3">
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
                  <div className="col-12" key={college.id}>
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
