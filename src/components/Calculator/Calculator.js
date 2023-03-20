import "./Calculator.scss";
import CalcForm from "../CalcForm/CalcForm";
import Manual from "../Manual/Manual";

const Calculator = () => {

  return (
    <section className="calculator">
      <div className="calculator__content">
        <div className="calculator__title-container">
          <h3 className="calculator__title">Калькулятор объема жидкости в плевральной полости</h3>
        </div>
        <div className="calculator__manual-container">
          <h3 className="calculator__title">Инструкция</h3>
        </div>
        <CalcForm />
        <Manual/>
      </div>
    </section>
  );
};

export default Calculator;
