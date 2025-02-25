
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from './pages/Home';
import MentorDetails from './pages/MentorDetails'; // Fixed typo
import MentorProvider from "./components/MentorContext";
import BrowseMentorPage from "./pages/BrowseMentorPage";

function App() {
  return (
    <MentorProvider>
       <Router> {/* Wrapped in BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MentorDetails />} />
        <Route path="/browse" element={<BrowseMentorPage/>}/>
      </Routes>
    </Router>
    </MentorProvider>
   
  );
}

export default App;
