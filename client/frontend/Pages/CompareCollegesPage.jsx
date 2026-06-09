
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import ComparisonTable from "../src/components/ComparisonTable";

export default function CompareCollegesPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [allColleges, setAllColleges] = useState([]);
    const [selectedColleges, setSelectedColleges] = useState([
        null,
        null,
        null,
    ]);

    const [activeSlot, setActiveSlot] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const collegesResponse = await fetch(
            "http://localhost:5000/api/colleges"
            );

            const collegesData =
            await collegesResponse.json();

            setAllColleges(collegesData);

            const selectedResponse = await fetch(
            `http://localhost:5000/api/colleges/${id}`
            );

            const selectedCollege =
            await selectedResponse.json();

            setSelectedColleges([
            selectedCollege,
            null,
            null,
            ]);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, [id]);

    const availableColleges = allColleges.filter(
        (college) =>
            searchTerm &&
            !selectedColleges.some(
            (selected) =>
                selected && selected.id === college.id
            ) &&
            college.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const addCollege = (college) => {
        const updated = [...selectedColleges];

        updated[activeSlot] = college;

        setSelectedColleges(updated);

        setActiveSlot(null);
        setSearchTerm("");
    };

  return (
    <>
    <Navbar />

    <div className="container py-5">

      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back
      </button>

      <h2 className="text-center mb-5">
        Compare Colleges
      </h2>

      <div className="row justify-content-center g-4">

        {selectedColleges.map(
          (college, index) => (
            <div
              className="add-college col-md-4"
              key={index}
            >
              {college ? (
                <div
                className={`compare-college card h-100 ${
                    activeSlot === index ? "selected-card" : ""
                }`}
                onClick={() => {setActiveSlot(index)}}
                >                  
                    <div className="card-body p-2">
                        <div className="logo d-flex justify-content-center p-3">
                            <img src="/collegeLogo.jpg" alt={college.acronym} />
                        </div>
                        <div className="text-center">
                            <p className="fw-bold fs-5">{college.acronym}</p>
                            <p className="fs-6">{college.city}, {college.state}</p>
                            <p>
                                <span className="btn btn-success text-white mt-1 px-4">
                                    <i className="bi bi-star-fill me-2"></i>
                                    {college.rating}
                                </span>
                            </p>    
                        </div>
                    </div>
                </div>
              ) : (
                <div
                  className={`compare-college card h-100 d-flex justify-content-center align-items-center
                    ${
                        activeSlot === index ? "selected-card" : ""
                    }`}
                    onClick={() =>
                        setActiveSlot(index)
                    }
                >
                  <div className="text-center text-primary">
                    <i className="bi bi-plus-circle fs-1"></i>

                    <p className="mt-3">
                      Add College
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        )}

      </div>

      {activeSlot !== null && (
        <div className="row justify-content-center mt-5">

          <div className="col-md-6">

            <div className="card shadow-sm">
              <div className="card-body">

                <h5>
                  Select a College
                </h5>

                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Search colleges..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(
                      e.target.value
                    )
                  }
                />

                <div className="list-group">
                    {searchTerm.length >= 2 ? (
                        availableColleges.length > 0 ? (
                            availableColleges.map((college) => (
                            <button
                                key={college.id}
                                className="list-group-item list-group-item-action"
                                onClick={() => addCollege(college)}
                            >
                                {college.name}
                            </button>
                            ))
                        ) : (
                            <p className="text-muted p-2">
                            No college found
                            </p>
                        )
                        ) : (
                        <p className="text-muted p-2">
                            Type to search colleges...
                        </p>
                    )}
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

      {selectedColleges.filter(Boolean)
      .length >= 2 && 
      <ComparisonTable selectedColleges={selectedColleges} />
      }

    </div>
    </>
  );
}