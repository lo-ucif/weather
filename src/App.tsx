import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/Search";
import Location from "./pages/Location";
import Question from "./pages/Question";


function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="/search">Search</Link> |
        <Link to="/location">Location</Link> |
        <Link to="/question">Question</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/location" element={<Location />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
