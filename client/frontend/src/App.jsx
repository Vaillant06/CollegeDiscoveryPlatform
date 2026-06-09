import { Routes, Route } from "react-router-dom";

import Home from "../Pages/HomePage";
import ViewCollegeDetails from "../Pages/ViewCollegeDetails";
import CompareCollegesPage from "../Pages/CompareCollegesPage";
import PredictorToolPage from "../Pages/PredictorToolPage";
import ViewExamsPage from "../Pages/ViewExamsPage";
import ViewCoursesPage from "../Pages/ViewCoursesPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/college/:id" element={<ViewCollegeDetails />} />
        <Route path="/compare/:id" element={<CompareCollegesPage />} />
        <Route path="/predictor" element={<PredictorToolPage />} />
        <Route path="/exams" element={<ViewExamsPage />} />
        <Route path="/courses" element={<ViewCoursesPage />} />
      </Routes>
    </>
  );
}

export default App;
