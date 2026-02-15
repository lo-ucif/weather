import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Homeicon from "../icon/Homeicon";
import Searchicon from "../icon/Searchicon";
import Locationicon from "../icon/Locationicon";
import Queastionicon from "../icon/Queastionicon";
import Threelineicon from "../icon/Threelineicon";
import Refrechbut from "../icon/refrechbut";
import { useState } from "react";

export default function Navbar() {
  const [nameAct, setNameAct] = useState<string>("home");
  const [isopen, setopen] = useState<boolean>(false);
  const handlclick = () => {
    setopen(!isopen);
  };

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
      {/* nanbar phone */}
      <div className="flex sm:hidden glass-card justify-between w-full  p-2 items-center text-xl font-medium">
        <button onClick={handlclick}>
          <Threelineicon />
        </button>
        <div className="w-16">{nameAct}</div>
        <Refrechbut />
      </div>
      {/* dachboard */}
      {isopen && (
        <div
          className={` dashboard ${isopen ? "open" : "closed"} flex  sm:hidden flex-col glass-card items-start w-full gap-6 pl-6 pt-5 pb-5 text-xl mt-2 z-50 transition-all duration-500 ease-in-out `}
        >
          <NavLink to="/">
            {({ isActive }) => (
              <div
                onClick={() => setNameAct("home")}
                className={`itme2  ${isActive ? "active" : ""}`}
              >
                <Homeicon />
                <span className="text">home</span>
              </div>
            )}
          </NavLink>
          <NavLink to="/search">
            {({ isActive }) => (
              <div
                onClick={() => setNameAct("search")}
                className={`itme2  ${isActive ? "active" : ""}`}
              >
                <Searchicon />
                <span className="text">search</span>
              </div>
            )}
          </NavLink>
          <NavLink to="/location">
            {({ isActive }) => (
              <div
                onClick={() => setNameAct("location")}
                className={`itme2  ${isActive ? "active" : ""}`}
              >
                <Locationicon />
                <span className="text">location</span>
              </div>
            )}
          </NavLink>
          <NavLink to="/question">
            {({ isActive }) => (
              <div
                onClick={() => setNameAct("help")}
                className={`itme2  ${isActive ? "active" : ""}`}
              >
                <Queastionicon />
                <span className="text">help</span>
              </div>
            )}
          </NavLink>
        </div>
      )}
    </div>
  );
}
