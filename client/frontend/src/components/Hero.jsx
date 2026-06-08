
export default function Hero() {
    return (
        <div className="container-fluid card shadow-sm py-5 text-center">
            <h1 className="display-4 fw-bold">
                Find the right college for your future
            </h1>
    
            <p className="text-muted fs-5 mt-3">
                Search colleges, courses, exams, and placements
            </p>
    
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                <div className="input-group">
                    <span className="hero-search input-group-text bg-white border-end-0">
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
    )
}