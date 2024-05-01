import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className= "topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejdMK4lNiOQ-ZOzZW2whmw_VNroixtUXSo0AuMTpu1g&s"
          alt=""
        />
        <i className="topSearchIcon  fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
}
