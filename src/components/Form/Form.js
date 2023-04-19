import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {useDispatch} from "react-redux";
import {calcRes, hideError} from '../../redux/actions'
import "./Form.scss";
import Errors from "../Errors/Errors";
import {showError} from '../../redux/actions';

const Form = ({resultat, errors}) => {

  const [isBlockedInput, setIsBlockedInput] = useState(false);
  const [isBlockedClear, setIsBlockedClear] = useState(true);
  const [isBlockedSubmit, setIsBlockedSubmit] = useState(true);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    grown: "",
    weight: "",
    l: "",
    sep: ""
      })

  const [errorState, setErrorState] = useState({
    grown: null,
    weight: null,
    l: null,
    sep: null
  });

  useEffect(()=>{

      if(state.grown && state.weight && state.l && state.sep && !Object.values(errorState).includes("Error")){
        console.log(errorState, 'errorState')
        setIsBlockedSubmit(false);
      } else {
        console.log(errorState, 'errorState')
        setIsBlockedSubmit(true);
      }

    },
    [state, errorState])

  const submitHandler = event => {
    event.preventDefault();
    setIsBlockedInput(true);
    dispatch(calcRes(state.grown, state.weight, state.l, state.sep));
    setIsBlockedSubmit(true);
  }

  const changeInputHandler = event => {
    event.persist();
    setState(prev => ({...prev, ...{[event.target.name]: event.target.value}}));
    setIsBlockedClear(false);

    let targetValueNumber = Number(event.target.value);
    let regex = /^[0-9.,]*$/;

    let nameInpt
    switch (event.target.name) {
      case 'sep': {
        console.log(event.target.value, "event.target.value")
        nameInpt = 'SEP';
        if(targetValueNumber === 0 || targetValueNumber>100 || !regex.test(event.target.value)
          || /^\./.test(event.target.value) || /^,/.test(event.target.value)){
          setErrorState(prev => ({...prev, ...{[event.target.name]: 'Error'}}));
          return dispatch(showError(nameInpt, "Введите число больше 0 и не более 100"));
        }else{
          setErrorState(prev => ({...prev, ...{[event.target.name]: null}}));
          return dispatch(hideError());
        }
      }
      case 'grown': {
        nameInpt = 'Рост';
        if(targetValueNumber === 0 || targetValueNumber>300  || !regex.test(event.target.value)
          || /^\./.test(event.target.value) || /^,/.test(event.target.value)){
          setErrorState(prev => ({...prev, ...{[event.target.name]: 'Error'}}));
          return dispatch(showError(nameInpt, "Введите число больше 0 и не более 300"));
        }else{
          setErrorState(prev => ({...prev, ...{[event.target.name]: null}}));
          return dispatch(hideError());
        }
      }
      case 'weight': {
        nameInpt = 'Вес';
        if(targetValueNumber === 0 || targetValueNumber>500  || !regex.test(event.target.value)
          || /^\./.test(event.target.value) || /^,/.test(event.target.value)){
          setErrorState(prev => ({...prev, ...{[event.target.name]: 'Error'}}));
          return dispatch(showError(nameInpt, "Введите число больше 0 и не более 500"));
        }else{
          setErrorState(prev => ({...prev, ...{[event.target.name]: null}}));
          return dispatch(hideError());
        }
      }
      case 'l':
      {
        nameInpt = 'L';
        if(targetValueNumber === 0 || targetValueNumber>100 || !regex.test(event.target.value)
          || /^\./.test(event.target.value) || /^,/.test(event.target.value)){
          setErrorState(prev => ({...prev, ...{[event.target.name]: 'Error'}}));
          return dispatch(showError(nameInpt, "Введите число больше 0 и не более 100"));
        }else{
          setErrorState(prev => ({...prev, ...{[event.target.name]: null}}));
          return dispatch(hideError());
        }
      }
    }
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

  console.log(errors, 'errors')

    return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__input-cell">
        <p className="form__input-description">Рост</p>
        <input
          className="form__input"
          type="text"
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
          type="text"
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
          type="text"
          value={state.l}
          disabled={isBlockedInput}
          onChange={changeInputHandler}
        />
        <div className="form__input-measuring">cм</div>
      </div>
      <div className="form__input-cell">
        <p className="form__input-description">SEP</p>
        <input
          className="form__input"
          id="sep"
          name="sep"
          type="text"
          value={state.sep}
          disabled={isBlockedInput}
          onChange={changeInputHandler}
        />
        <div className="form__input-measuring">cм</div>
      </div>
      <Errors errorText={errors.error}/>
      <div className="form__result">
        <p>Результат
        </p>
        <span className={`result-part1 ${resultat.result !== '0 мл' ? '' : 'result-part1_bigger'}` }>{resultat.result.split("+")[0]}</span>
        {resultat.result !== '0 мл' && <span id="result-part2">{resultat.result.split("+")[1]}</span>}
      </div>
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
  calcRes, showError
}

const mapStateToProps = state => {
  return {
    resultat: state.app,
    errors: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
