import { Link } from "react-router-dom";

import logo from "./../../logo.svg";

const NavMenu = () => {
  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-announce">create announce</Link>
      </nav>
    </header>
  );
};

export default NavMenu;
