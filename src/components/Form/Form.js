import "./Form.scss";

const Form = () => {

  return (
    <form className="form">
      <div className="form__input-cell">
        <p className="form__input-description">Рост</p>
        <input className="form__input"/>
        <div className="form__input-measuring">см</div>
      </div>
      <div className="form__input-cell">
        <p className="form__input-description">Вес</p>
        <input className="form__input"/>
        <div className="form__input-measuring">кг</div>
      </div>
      <div className="form__input-cell">
        <p className="form__input-description">L</p>
        <input className="form__input"/>
        <div className="form__input-measuring">мм</div>
      </div>
      <div className="form__input-cell">
        <p className="form__input-description">SEP</p>
        <input className="form__input"/>
        <div className="form__input-measuring">мм</div>
      </div>
      <div className="form__result">Результат <span>990</span></div>
      <button className="form__btn">Рассчитать</button>
      <button className="form__btn form__btn_disabled">Очистить</button>






    </form>
  );
};

export default Form;
