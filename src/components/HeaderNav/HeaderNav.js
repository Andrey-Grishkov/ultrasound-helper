import "./HeaderNav.scss";
import { Link } from "react-router-dom";

const HeaderNav = () => {

  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        <li>
          <Link className="header-nav__link" to="/">На главную</Link>
        </li>
        <li>
          <Link className="header-nav__link" to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
