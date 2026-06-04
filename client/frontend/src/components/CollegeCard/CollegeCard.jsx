
import "./CollegeCard.css"

export default function CollegeCard({ college }) {
  return (
    <div className="college-card card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

      <div className="logo">
        <img src="collegeLogo.jpg" alt={college.name} />
      </div>

      <div className="card-body">
        <div className="details">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="fw-bold">{college.name}</h5>
              <div className="small">
              <span className="btn btn-success">⭐ {college.rating}</span>
          </div>
          </div>

          <p className="text-muted mb-2">
            <i class="bi bi-geo-alt-fill me-2"></i>
            {college.city}, {college.state}
          </p>
          <p className="text-muted mb-2">
            <i className="bi bi-currency-rupee me-2"  >
            </i>{college.fees} Lakh/year</p>
          <p className="text-muted mb-2"><i className="bi bi-building-fill me-2">
            </i>{college.ownership}
          </p>
          <p className="text-muted mb-2"><i className="bi bi-bookmark-star-fill me-2">
            </i>NIRF Ranking: {college.nirfRanking}
          </p>


          <div className="options mt-2">
            <button className="btn btn-sm btn-primary mt-3 mx-3">
              <i className="bi bi-eye me-2"></i>
              View Details
            </button>
            <button className="btn btn-sm btn-outline-primary mt-3 mx-3">
              <i className="bi bi-arrow-left-right me-2"></i>
              Compare
            </button>
            <button className="btn btn-sm btn-outline-danger mt-3 mx-3">
              <i className="bi bi-question-circle-fill me-2"></i>
              Enquire
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}