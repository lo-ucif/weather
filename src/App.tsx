import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/Search";
import Location from "./pages/Location";
import Question from "./pages/Question";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="fixed sm:relative z-10 w-[85%]">
        <Navbar />
      </div>
      <div className="mt-14 sm:mt-0 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/location" element={<Location />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
