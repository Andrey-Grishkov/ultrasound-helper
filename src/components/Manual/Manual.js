import "./Manual.scss";
import ManualImg from "../../images/manual__image.png";

const Manual = () => {

  return (
    <div className="manual">
      <h3 className="manual__title">Что важно проверить:</h3>
      <ul className="manual__list">
        <li className="manual__list-item">Пациент находится в горизонтальном положении</li>
        <li className="manual__list-item">Датчик установлен по заднеподмышечной линии в 7-10 межреберье, луч
          сканирования направлен к противоположному плечу</li>
      </ul>
      <h3 className="manual__image-title">Верное положение датчика при проведении УЗИ:</h3>
      <img className="manual__image" src={ManualImg} alt="position ultrasound"/>

    </div>
  );
};

export default Manual;
