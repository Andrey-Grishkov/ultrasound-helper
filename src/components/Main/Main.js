import { Link } from "react-router-dom";
import "./Main.scss";
import MainImg from "../../images/main__image.svg";

const Main = () => {

  return (
    <section className="main">
      <h3 className="main__title">Калькуляторы</h3>
      <nav className="main__navigation">
        <ul className="main__links">
          <li>
            <Link className="main__link main__link_active" to="/calculator">
              <img className="main__image" src={MainImg} alt="Logo calculator"/>
              <p className="main__text">Вычисление объема жидкости в плевральной полости</p>
            </Link>
          </li>
          <li className="main__link">
            <img className="main__image" src={MainImg} alt="Logo calculator"/>
            <p className="main__text">Калькулятор находится на стадии получения патента</p>
          </li>
          <li className="main__link">
            <img className="main__image" src={MainImg} alt="Logo calculator"/>
            <p className="main__text">Калькулятор находится на стадии получения патента</p>
          </li>
        </ul>
      </nav>

    </section>
  );
};

export default Main;
