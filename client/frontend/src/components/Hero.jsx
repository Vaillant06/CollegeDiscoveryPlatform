
import { useNavigate } from "react-router-dom";

export default function Hero({
  colleges,
  searchTerm,
  setSearchTerm,
}) {

  const navigate = useNavigate();

  const suggestions =
    searchTerm.length > 0
      ? colleges.filter((college) =>
          college.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : [];

  return (  
    <div className="container-fluid card shadow-sm py-5 text-center">
      <h1 className="display-4 fw-bold">
        Find the right college for your future
      </h1>

      <p className="text-muted fs-5 mt-3">
        Search colleges, courses, exams, and placements
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8 position-relative">

          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>

            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search Colleges..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>

          {suggestions.length > 0 && (
            <div
              className="list-group position-absolute w-100 shadow z-3"
              style={{
                top: "100%",
                left: 0,
              }}
            >
              {suggestions
                .slice(0, 5)
                .map((college) => (
                  <button
                    key={college.id}
                    className="list-group-item list-group-item-action text-start"
                    onClick={() => {
                      setSearchTerm("");
                      navigate(
                        `/college/${college.id}`
                      );
                    }}
                  >
                    {college.name}
                  </button>
                ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}