import { useState, useEffect } from "react";


export default function Filters({
  states,
  cities,
  ownerships,
  onFilterChange,
}) {
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedOwnership, setSelectedOwnership] = useState([]);
  const [rating, setRating] = useState("");
  const [minFee, setMinFee] = useState("");
  const [maxFee, setMaxFee] = useState("");

  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

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
      ownerships: selectedOwnership,  
      rating,
      minFee,
      maxFee,
    });
  }, [
    selectedStates,
    selectedCities,
    selectedOwnership,
    rating,
    minFee,
    maxFee,
    onFilterChange,
  ]);

  const clearFilters = () => {
    setSelectedStates([]);
    setSelectedCities([]);
    setSelectedOwnership([]);
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
        <div className="filter-section mb-4">
          <label className="form-label fw-semibold mt-2">State</label>

          <div className="input-group mb-3">
          <span className="input-group-text bg-white border-end-0 px-2">
            <i className="bi bi-search"></i>
          </span>

          <input
            type="text"
            className="form-control border-start-0 px-1"
            placeholder="Search State"
            value={stateSearch}
            onChange={(e) => setStateSearch(e.target.value)}
          />
        </div>

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
        <div className="filter-section mb-4">
          <label className="form-label fw-semibold mt-2">City</label>

          <div className="input-group mb-3">
          <span className="input-group-text bg-white border-end-0 px-2">
            <i className="bi bi-search"></i>
          </span>

          <input
            type="text"
            className="form-control border-start-0 px-1"
            placeholder="Search City"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
          />
        </div>

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

        {/* Ownership */}
        <div className="filter-section mb-4">
          <label className="form-label fw-semibold mt-2">
            Ownership
          </label>

          <div>
            {ownerships.map((owner) => (
              <div className="form-check mb-2" key={owner}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`ownership-${owner}`}
                  checked={selectedOwnership.includes(owner)}
                  onChange={() =>
                    toggleSelection(
                      owner,
                      selectedOwnership,
                      setSelectedOwnership
                    )
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`ownership-${owner}`}
                >
                  {owner}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="filter-section mb-4">
          <label className="form-label fw-semibold mt-2">Rating</label>

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
                onClick={() =>
                  setRating(rating === r ? "" : r)
                }
              >
                {r}+
              </button>
            ))}
          </div>
        </div>

        {/* Fees */}
        <div className="filter-section mb-4">
          <label className="form-label fw-semibold mt-2">
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