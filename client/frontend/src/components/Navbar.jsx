
import { Link } from "react-router-dom";

export default function Navbar() {

  const functionComingSoon = () => {
    window.alert("Functionality Coming Soon!")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        
        <Link className="navbar-brand fw-bold text-primary fs-3" to="#">
          ChooseYourCareer99
        </Link>

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
              <Link 
                to="/predictor" 
                className="nav-link"
              >
                Predictor
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/exams" 
                className="nav-link"
              >
                Exams
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/courses" 
                className="nav-link"
              >
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <button 
                className="btn btn-primary rounded-pill px-4"
                onClick={functionComingSoon} 
              >
                Login
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}