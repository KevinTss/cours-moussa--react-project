import { Header, LinkEl } from "./style.js";
import logo from "./../../logo.svg";

const NavMenu = () => {
  return (
    <Header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <LinkEl to="/">Home</LinkEl>
        <LinkEl to="/create-announce">create announce</LinkEl>
        <LinkEl to="/login">Login</LinkEl>
      </nav>
    </Header>
  );
};

export default NavMenu;
