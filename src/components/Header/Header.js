import "./Header.scss";
import Logo from "../Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";

const Header = () => {

  return (
    <header className="header">
      <div className="header__container">
        <Logo/>
        <div className="header__text-container">
          <h3 className="header__title">Помощник врача УЗИ</h3>
          <p className="header__text">Делаем работу более эффективной и точной</p>
        </div>
      </div>
      <div className="header__nav-container">
        <HeaderNav/>
      </div>
      <button
        className="header__burger-menu"
        type="button"
      ></button>
    </header>
  );
};

export default Header;
