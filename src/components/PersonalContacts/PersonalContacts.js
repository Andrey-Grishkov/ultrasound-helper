import "./PersonalContacts.scss";
import Pikalo from "../../images/Pikalo.jpg"

const PersonalContacts = () => {

  return (
    <section className="personal">
      <div className="personal__content">
        <img className="personal__image" src={Pikalo}/>
        <div className="personal__text">
          <h3 className="personal__title">Пикало Илья Андреевич</h3>
          <p className="personal__description">Пикало Илья Андреевич - врач ультразвуковой диагностики, эндоскопист высшей
            категории, детский хирург. Занимается комплексной диагностикой и лечением острой и хронической хирургической
            патологии. Выполняет амбулаторные операции. Директор федерального аккредитационного центра ИГМУ, заведующий
            кафедрой экстренной медицинской помощи, руководитель научного общества молодых ученых и студентов
            им. И.И. Мечникова. Кандидат медицинских наук, доцент.</p>
        </div>
      </div>
      <p className="personal__name-link">Номер телефона: <a className="personal__link" href="tel:+7(3952)-200-911">
        +7-(3952)-200-911</a></p>
      <p className="personal__name-link">Номер моб.телефона: <a className="personal__link" href="tel:+7(950)-050-81-65">
        +7-(950)-050-81-65</a></p>
      <p className="personal__name-link">Эл. почта: <a className="personal__link" href="mailto:pikalodoc@mail.ru">
        pikalodoc@mail.ru</a></p>
    </section>
  );
};

export default PersonalContacts;
