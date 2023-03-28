import "./Contacts.scss";
import TeamList from "../TeamList/TeamList";
import PersonalContacts from "../PersonalContacts/PersonalContacts";
import {doctorList} from "../../utils/constants"
import {infoContact} from "../../redux/actions";
import {connect, useDispatch} from "react-redux";

const Contacts = () => {

  const dispatch = useDispatch();

  const clickHandler = event => {
    event.preventDefault();
    dispatch(infoContact(doctorList[0].name, doctorList[0].photo, doctorList[0].info, doctorList[0].contacts));
  }

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
        <p className="contacts__link" onClick={clickHandler}>Пикало Илье Андреевичу</p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  infoContact
}

export default connect(null, mapDispatchToProps)(Contacts);
