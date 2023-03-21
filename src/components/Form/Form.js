import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {useDispatch} from "react-redux";
import {calcRes} from '../../redux/actions'
import "./Form.scss";

const Form = ({resultat}) => {

  const [isBlockedInput, setIsBlockedInput] = useState(false);
  const [isBlockedClear, setIsBlockedClear] = useState(true);
  const [isBlockedSubmit, setIsBlockedSubmit] = useState(true);
  console.log(resultat.result, 'init res')

  const dispatch = useDispatch();

  const [state, setState] = useState({
    grown: "",
    weight: "",
    l: "",
    sep: ""
      }
      )

  useEffect(()=>{
      if(state.grown&&state.weight&& state.l && state.sep){
        setIsBlockedSubmit(false);
      }
      console.log(state, "state")
    },
    [state])

  const submitHandler = event => {
    event.preventDefault();
    setIsBlockedInput(true);
    dispatch(calcRes(state.grown, state.weight, state.l, state.sep));
    setIsBlockedSubmit(true);
  }

  const changeInputHandler = event => {
    event.persist();
    setState(prev => ({...prev, ...{[event.target.name]: event.target.value}}))

    setIsBlockedClear(false);
  }

  const stateClear = event =>{
    event.preventDefault();
    setIsBlockedInput(false);
    setState({
      grown: "",
      weight: "",
      l: "",
      sep: ""
    })
    dispatch(calcRes(0, 0, 0, 0));
    setIsBlockedSubmit(true);
    setIsBlockedClear(true);
  }

    return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__input-cell">
        <p className="form__input-description">Рост</p>
        <input
          className="form__input"
          type="number"
          id="grown"
          name="grown"
          value={state.grown}
          onChange={changeInputHandler}
          disabled={isBlockedInput}
        />
        <div className="form__input-measuring">см</div>
      </div>
      <div className="form__input-cell">
        <p className="form__input-description">Вес</p>
        <input
          className="form__input"
          type="number"
          id="weight"
          name="weight"
          value={state.weight}
          disabled={isBlockedInput}
          onChange={changeInputHandler}
        />
        <div className="form__input-measuring">кг</div>
      </div>
      <div className="form__input-cell">
        <p className="form__input-description">L</p>
        <input
          className="form__input"
          id="l"
          name="l"
          value={state.l}
          disabled={isBlockedInput}
          onChange={changeInputHandler}
        />
        <div className="form__input-measuring">мм</div>
      </div>
      <div className="form__input-cell">
        <p className="form__input-description">SEP</p>
        <input
          className="form__input"
          id="sep"
          name="sep"
          value={state.sep}
          disabled={isBlockedInput}
          onChange={changeInputHandler}
        />
        <div className="form__input-measuring">мм</div>
      </div>
      <div className="form__result">Результат <span>{resultat.result}</span></div>
      <button
        className={`form__btn ${isBlockedSubmit ? 'form__btn_disabled' : ""}`}
        type="submit"
        disabled={isBlockedSubmit}
      >Рассчитать</button>
      <button
        className={`form__btn ${isBlockedClear ? 'form__btn_disabled' : ""}`}
        type="button"
        onClick={stateClear}
        disabled={isBlockedClear}

      >Очистить</button>
    </form>
    )
}

const mapDispatchToProps = {
  calcRes
}

const mapStateToProps = state => {
  return {
    resultat: state.app
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
