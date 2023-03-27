import "./TeamList.scss";

const TeamList = () => {

  return (
    <section className="team">
      <h3 className="team__title">Разработка калькуляторов ведется сотрудниками ФГБОУ ВО «Иркутский государственный
        медицинский университет» г.Новосибирск</h3>
      <ul className="team__list">
        <li className="team__item">
          Пикало Илья Андреевич
        </li>
        <li className="team__item">
          Подкаменев Владимир Владимирович
        </li>
        <li className="team__item">
          Михайлов Николай Иванович
        </li>
        <li className="team__item">
          Семенов Александр Васильевич
        </li>
        <li className="team__item">
          Григорьев Дмитрий
        </li>
      </ul>
      <h3 className="team__title">Разработчики сайта</h3>
      <ul className="team__list">
        <li className="team__item">
          Морозова Любовь<span className="team__prof"> - Project-manager</span>
        </li>
        <li className="team__item">
          Пономарева Екатерина<span className="team__prof"> - Веб-дизайнер</span>
        </li>
        <li className="team__item">
          Гришков Андрей<span className="team__prof"> - Веб-разработчик</span>
        </li>
        <li className="team__item">
          Сан Никита<span className="team__prof"> - QA-тестировщик</span>
        </li>
        <li className="team__item">
          Шматкова Анна<span className="team__prof"> - QA-тестировщик</span>
        </li>
      </ul>
    </section>
  );
};

export default TeamList;
