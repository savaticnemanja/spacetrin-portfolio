import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">
        <Logo className="navigation-bar__logo" fill="#fff" />
      </Link>
      <nav className="navigation-bar__links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="mailto:spacetrinmusic@gmail.com">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
