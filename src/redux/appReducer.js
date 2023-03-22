import {SET_RESULT} from "./types";

const initialState = {
  grown: '',
  weight: '',
  result: '0 мл'
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_RESULT:
    {
      function roundToNearestMultipleOfFive(num) {
        const remainder = num % 5;
        if (remainder < 2.5) {
          return num - remainder;
        } else {
          return num + (5 - remainder);
        }
      }

      function roundToNearestMultipleOfTen(num) {
        const remainder = num % 10;
        if (remainder < 5) {
          return num - remainder;
        } else {
          return num + (10 - remainder);
        }
      }

      const BSA = 0.024265*(action.payload.grown**0.3964)*(action.payload.weight**0.5378);
      const DIP = action.payload.l*action.payload.sep*BSA;
      let resultat, resultatMin, resultatMax
      if(DIP==0){
        return {result: `0 мл`};
      } else if (DIP<200){

        const resultat = roundToNearestMultipleOfFive(Math.trunc(DIP*9.01));
        const resultatMin = roundToNearestMultipleOfTen(Math.trunc(DIP*(9.01-0.34)));
        const resultatMax = roundToNearestMultipleOfTen(Math.trunc(DIP*(9.01+0.34)));

        return {result: `${resultat} мл+ 
        (${resultatMin} - 
        ${resultatMax} мл)
        `};
      } else if (DIP<500) {

        const resultat = roundToNearestMultipleOfFive( Math.trunc(DIP*8.17));
        const resultatMin =  roundToNearestMultipleOfTen(Math.trunc(DIP*(8.17-0.17)));
        const resultatMax = roundToNearestMultipleOfTen(Math.trunc(DIP*(8.17+0.17)));

        return {result: `${resultat} мл+ 
        (${resultatMin} - 
        ${resultatMax} мл)
        `};
      }
      else {

        const resultat = roundToNearestMultipleOfFive( Math.trunc(DIP*7.77));
        const resultatMin =  roundToNearestMultipleOfTen(Math.trunc(DIP*(7.77-0.46)));
        const resultatMax = roundToNearestMultipleOfTen(Math.trunc(DIP*(7.77+0.46)));

        return {result: `${resultat} мл+ 
        (${resultatMin} - 
        ${resultatMax} мл)
        `};
      }
    }

    default: return state
  }
}
