import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const isUser = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to = "/write">WRITE</Link>
          </li>
          <li className="topListItem"><Link className="link" to ="/login">{isUser && "LOGOUT"}</Link></li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejdMK4lNiOQ-ZOzZW2whmw_VNroixtUXSo0AuMTpu1g&s"
          alt=""
        />
        <i className="topSearchIcon  fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
}
