import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/Search";
import Location from "./pages/Location";
import Question from "./pages/Question";
import Navbar from "./components/layout/Navbar";
import Rightsicon from "./components/icon/Rightsicon";
import Icontxt from "./components/ui/Icontxt";
function App() {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/location" element={<Location />} />
        <Route path="/question" element={<Question />} />
      </Routes>
      <div className="fixed bottom-0">
        <Icontxt Icon={Rightsicon} text=" Ahmed Loucif @ all rights reserved" />
      </div>
    </div>
  );
}

export default App;
