import { Link } from "react-router-dom";
import "./Navbar.css";
import Homeicon from "../icon/Homeicon";
import Searchicon from "../icon/Searchicon";
import Locationicon from "../icon/Locationicon";
import Queastionicon from "../icon/Queastionicon";
export default function Navbar() {
  return (
    <div className="flex flex-row w-fit py-3 px-10 gap-16 glass-card justify-center items-center rounded-[40px] ">
      <Link to="/">
        <Homeicon />
      </Link>
      <Link to="/search">
        <Searchicon />
      </Link>
      <Link to="/location">
        <Locationicon />
      </Link>
      <Link to="/question">
        <Queastionicon />
      </Link>
    </div>
  );
}
