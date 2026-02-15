import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Homeicon from "../icon/Homeicon";
import Searchicon from "../icon/Searchicon";
import Locationicon from "../icon/Locationicon";
import Queastionicon from "../icon/Queastionicon";
import Threelineicon from "../icon/Threelineicon";
import Refrechbut from "../icon/refrechbut";
// import { useState } from "react";

export default function Navbar() {
  // const [nameAct, setNameAct] = useState<string>("home");
  return (
    <div>
      <div className="navbar hidden sm:flex flex-row w-fit py-3 px-10 gap-8 sm:gap-8 glass-card justify-center items-center rounded-[40px]">
        <NavLink to="/">
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
      <div className="flex sm:hidden glass-card justify-between w-full gap-20 p-2 items-center text-xl font-medium">
        <Threelineicon />
        <div>home</div>
        <Refrechbut />
      </div>
    </div>
  );
}
