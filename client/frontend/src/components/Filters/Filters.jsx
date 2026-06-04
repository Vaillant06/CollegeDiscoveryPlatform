import { useState, useEffect } from "react";

export default function Filters({ onFilterChange }) {
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [rating, setRating] = useState("");
  const [minFee, setMinFee] = useState("");
  const [maxFee, setMaxFee] = useState("");
  

  const states = [
    "Tamil Nadu",
    "Karnataka",
    "Kerala",
    "Maharashtra",
  ];

  const cities = [
    "Chennai",
    "Madurai",
    "Coimbatore",
    "Bangalore",
  ];

  const toggleSelection = (value, current, setter) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  useEffect(() => {
    onFilterChange({
      states: selectedStates,
      cities: selectedCities,
      rating,
      minFee,
      maxFee,
    });
  }, [
    selectedStates,
    selectedCities,
    rating,
    minFee,
    maxFee,
    onFilterChange,
  ]);

  const clearFilters = () => {
    setSelectedStates([]);
    setSelectedCities([]);
    setRating("");
    setMinFee("");
    setMaxFee("");
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">Filters</h5>

          <button
            className="btn btn-outline-primary btn-sm"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            State
          </label>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search State"
          />

          <div className="d-flex flex-wrap gap-2">
            {states.map((state) => (
              <button
                key={state}
                type="button"
                className={`btn btn-sm ${
                  selectedStates.includes(state)
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  toggleSelection(
                    state,
                    selectedStates,
                    setSelectedStates
                  )
                }
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            City
          </label>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search City"
          />

          <div className="d-flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={`btn btn-sm ${
                  selectedCities.includes(city)
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  toggleSelection(
                    city,
                    selectedCities,
                    setSelectedCities
                  )
                }
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            Rating
          </label>

          <div className="d-flex gap-2">
            {[4.5, 4, 3].map((r) => (
              <button
                key={r}
                type="button"
                className={`btn btn-sm ${
                  rating === r
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setRating(r)}
              >
                {r}+
              </button>
            ))}
          </div>
        </div>

        {/* Fees */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            Fees Range
          </label>

          <div className="row g-2">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Min Fee"
                value={minFee}
                onChange={(e) =>
                  setMinFee(e.target.value)
                }
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Max Fee"
                value={maxFee}
                onChange={(e) =>
                  setMaxFee(e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}