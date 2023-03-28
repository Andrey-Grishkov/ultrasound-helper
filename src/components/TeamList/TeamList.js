import "./TeamList.scss";
import Team from "../Team/Team";
import {doctorList} from "../../utils/constants"
import {projectList} from "../../utils/constants"

const TeamList = () => {

  return (
    <section className="team">
      <h3 className="team__title">Разработка методик калькуляторов ведется сотрудниками ФГБОУ ВО «Иркутский государственный
        медицинский университет» г.Новосибирск</h3>
      <ul className="team__list">
        {doctorList.map((people) =>
          (<Team
            name={people.name}
            prof={people.prof}
            key={people.id}
            photo={people.photo}
            info={people.info}
            contacts={people.contacts}
          /> )
        )}
      </ul>
      <h3 className="team__title">Разработчики приложения</h3>
      <ul className="team__list">
        {projectList.map((people) =>
          (<Team
            name={people.name}
            prof={people.prof}
            key={people.id}
            photo={people.photo}
            info={people.info}
            contacts={people.contacts}
          /> )
        )}
      </ul>
    </section>
  );
};

export default TeamList;
