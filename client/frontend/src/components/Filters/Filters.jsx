import { useState, useEffect } from "react";

export default function Filters({ onFilterChange }) {
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [rating, setRating] = useState("");
  const [minFee, setMinFee] = useState("");
  const [maxFee, setMaxFee] = useState("");

  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const states = [
    "Tamil Nadu",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Andhra Pradesh",
    "Telangana",
    "Gujarat",
    "Rajasthan",
    "Punjab",
    "West Bengal",
  ];

  const cities = [
    "Chennai",
    "Madurai",
    "Coimbatore",
    "Bangalore",
    "Mysore",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Ahmedabad",
    "Kolkata",
  ];

  const toggleSelection = (value, current, setter) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const filteredStates = stateSearch
    ? states.filter((state) =>
        state.toLowerCase().includes(stateSearch.toLowerCase())
      )
    : states.slice(0, 5);

  const filteredCities = citySearch
    ? cities.filter((city) =>
        city.toLowerCase().includes(citySearch.toLowerCase())
      )
    : cities.slice(0, 5);

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
  ], [1000]);

  const clearFilters = () => {
    setSelectedStates([]);
    setSelectedCities([]);
    setRating("");
    setMinFee("");
    setMaxFee("");
    setStateSearch("");
    setCitySearch("");
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
          <label className="form-label fw-semibold">State</label>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search State"
            value={stateSearch}
            onChange={(e) => setStateSearch(e.target.value)}
          />

          <div>
            {filteredStates.length > 0 ? (
              filteredStates.map((state) => (
                <div className="form-check mb-2" key={state}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`state-${state}`}
                    checked={selectedStates.includes(state)}
                    onChange={() =>
                      toggleSelection(
                        state,
                        selectedStates,
                        setSelectedStates
                      )
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`state-${state}`}
                  >
                    {state}
                  </label>
                </div>
              ))
            ) : (
              <p className="text-muted small mb-0">
                No states found
              </p>
            )}
          </div>
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="form-label fw-semibold">City</label>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search City"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
          />

          <div>
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <div className="form-check mb-2" key={city}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`city-${city}`}
                  checked={selectedCities.includes(city)}
                  onChange={() =>
                    toggleSelection(
                      city,
                      selectedCities,
                      setSelectedCities
                    )
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`city-${city}`}
                >
                  {city}
                </label>
              </div>
              )) 
            ) : (
              <p className="text-muted small mb-0">
                No cities found
              </p>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Rating</label>

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
            Fees Range (Lakh/year)
          </label>

          <div className="row g-2">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Min Fee"
                value={minFee}
                onChange={(e) => setMinFee(e.target.value)}
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Max Fee"
                value={maxFee}
                onChange={(e) => setMaxFee(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}