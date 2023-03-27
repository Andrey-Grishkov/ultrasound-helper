import "./TeamList.scss";

const TeamList = () => {

  return (
    <section className="team">
      <h3 className="team__title">Разработка методик калькуляторов ведется сотрудниками ФГБОУ ВО «Иркутский государственный
        медицинский университет» г.Новосибирск</h3>
      <ul className="team__list">
        <li className="team__item">
          <p className="team__link">Пикало Илья Андреевич</p>
        </li>
        <li className="team__item">
          <p className="team__link">Подкаменев Владимир Владимирович</p>
        </li>
        <li className="team__item">
          <p className="team__link">Михайлов Николай Иванович</p>
        </li>
        <li className="team__item">
          <p className="team__link">Семенов Александр Васильевич</p>
        </li>
        <li className="team__item">
          <p className="team__link">Григорьев Дмитрий</p>
        </li>
      </ul>
      <h3 className="team__title">Разработчики приложения</h3>
      <ul className="team__list">
        <li className="team__item">
          <p className="team__link">Морозова Любовь</p>
          <span className="team__prof"> - Project-manager</span>
        </li>
        <li className="team__item">
          <p className="team__link">Пономарева Екатерина</p>
            <span className="team__prof"> - Веб-дизайнер</span>
        </li>
        <li className="team__item">
          <p className="team__link">Гришков Андрей</p>
          <span className="team__prof"> - Веб-разработчик</span>
        </li>
        <li className="team__item">
          <p className="team__link">Сан Никита</p>
          <span className="team__prof"> - QA-тестировщик</span>
        </li>
        <li className="team__item">
          <p className="team__link">Шматкова Анна</p>
            <span className="team__prof"> - QA-тестировщик</span>
        </li>
      </ul>
    </section>
  );
};

export default TeamList;
