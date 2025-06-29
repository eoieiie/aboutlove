import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img
          src="/KakaoTalk_20250629_221536738_01.jpg"
          alt="Logo"
          className="navbar-logo"
        />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mypage">Our Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
