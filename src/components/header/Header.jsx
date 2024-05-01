import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Bislerium</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/beautiful-green-park_1417-1448.jpg"
        alt=""
      />
    </div>
  );
}
