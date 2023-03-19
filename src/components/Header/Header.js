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
      <HeaderNav/>
    </header>
  );
};

export default Header;
