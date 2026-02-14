import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Homeicon from "../icon/Homeicon";
import Searchicon from "../icon/Searchicon";
import Locationicon from "../icon/Locationicon";
import Queastionicon from "../icon/Queastionicon";

export default function Navbar() {
  return (
    <div className="navbar scaleIn flex flex-row w-fit py-3 px-6 gap-8 sm:gap-8 glass-card justify-center items-center rounded-[40px]">
      <NavLink to="/" end>
        {({ isActive }) => (
          <div className={`itme  ${isActive ? "active" : ""}`}>
            <Homeicon />
            {isActive && <span className="text">home</span>}
          </div>
        )}
      </NavLink>

      <NavLink to="/search">
        {({ isActive }) => (
          <div className={`itme  ${isActive ? "active" : ""}`}>
            <Searchicon />
            {isActive && <span className="text">search</span>}
          </div>
        )}
      </NavLink>

      <NavLink to="/location">
        {({ isActive }) => (
          <div className={`itme  ${isActive ? "active" : ""}`}>
            <Locationicon />
            {isActive && <span className="text">location</span>}
          </div>
        )}
      </NavLink>

      <NavLink to="/question">
        {({ isActive }) => (
          <div className={`itme  ${isActive ? "active" : ""}`}>
            <Queastionicon />
            {isActive && <span className="text">help</span>}
          </div>
        )}
      </NavLink>
    </div>
  );
}
