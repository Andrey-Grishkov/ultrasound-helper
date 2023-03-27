import "./Contacts.scss";
import TeamList from "../TeamList/TeamList";
import PersonalContacts from "../PersonalContacts/PersonalContacts";

const Contacts = () => {

  return (
    <section className="contacts">
        <div className="contacts__content">
          <div className="contacts__title-container">
            <h3 className="contacts__title">О проекте</h3>
          </div>
          <div className="contacts__about-container">
            <h3 className="contacts__title">Контакты</h3>
          </div>
          <TeamList />
          <PersonalContacts />
        </div>
      <div className="contacts__text-container">
        <p className="contacts__text">Вопросы и предложения по работе калькуляторов, а также сообщить об ошибке можно</p>
        <p className="contacts__link">Пикало Илье Андреевичу</p>
      </div>
    </section>
  );
};

export default Contacts;
