
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from './pages/Home';
import MentorDetails from './pages/MentorDetails'; // Fixed typo

function App() {
  return (
    <Router> {/* Wrapped in BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor/:id" element={<MentorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
