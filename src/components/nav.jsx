import logo from "../assets/drizzleico.svg";
import "./nav.css";
const Nav = ({ SearchBar }) => {
  return (
    <header>
      <nav className="nav">
        <img className="logo-img" src={logo} />
        <h1>Drizzle</h1>
        {SearchBar}
      </nav>
    </header>
  );
};

export default Nav;
