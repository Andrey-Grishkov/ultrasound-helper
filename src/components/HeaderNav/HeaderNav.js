import "./HeaderNav.scss";

const HeaderNav = () => {

  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        <li>
          <a className="header-nav__link">На главную</a>
        </li>
        <li>
          <a className="header-nav__link">О проекте</a>
        </li>
        <li>
          <a className="header-nav__link">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
