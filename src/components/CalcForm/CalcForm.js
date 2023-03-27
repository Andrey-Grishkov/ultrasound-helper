import "./CalcForm.scss";
import FormImg from "../../images/calc-form__image.png";
import Form from "../Form/Form";

const CalcForm = () => {

  return (
    <div className="calc-form">
      <div className="calc-form__photo-container">
        <p className="calc-form__text">
          <b>SEP</b> — расстояние от диафрагмы до ткани легкого в мм.<br></br><br></br>
          <b>L</b> — под углом 90° к Sep, по касательной к диафрагме от медиальной до латеральной точек к ткани грудной стенки.
        </p>
        <img src={FormImg} className="calc-form__image" alt="ultrasound foto"/>
      </div>
      <div className="calc-form__form-container">
        <Form />
        <div></div>
      </div>
      <h3 className="calc-form__description-title">О калькуляторе</h3>
      <p className="calc-form__description">В основе калькулятора лежит способ определения объема свободной жидкости в
        плевральной полости, полученный
        экспериментально и запатентованный Иркутским государственным медицинским университетом в 2022 году. Точность
        расчетов 50мл.
        <a className="calc-form__link" href="https://www.elibrary.ru/item.asp?id=48775295" target="_blank">Ссылка на патент.</a></p>
    </div>
  );
};

export default CalcForm;
