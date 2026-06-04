export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        
        <a className="navbar-brand fw-bold text-primary fs-3" href="#">
          ChooseYourCareer
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Colleges
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Exams
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>

            <li className="nav-item">
              <button className="btn btn-primary rounded-pill px-4">
                Login
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}