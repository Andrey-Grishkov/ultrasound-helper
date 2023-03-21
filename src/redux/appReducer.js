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
      const BSA = 0.024265*(action.payload.grown**0.3964)*(action.payload.weight**0.5378);
      const DIP = action.payload.l*action.payload.sep*BSA;
      let resultat, resultatMin, resultatMax
      if(DIP==0){
        return {result: `0 мл`};
      } else if (DIP<200){
        return {result: `${resultat = Math.trunc(DIP*9.01)} мл 
        (${resultatMin = Math.trunc(DIP*(9.01-0.34))} - 
        ${resultatMax = Math.trunc(DIP*(9.01+0.34))})
        `};
      } else if (DIP<500) {
        return {result: `${resultat = Math.trunc(DIP*8.17)} мл 
        (${resultatMin = Math.trunc(DIP*(8.17-0.17))} - 
        ${resultatMax = Math.trunc(DIP*(8.17+0.17))})
        `};
      }
      else {
        return {result: `${resultat = Math.trunc(DIP*7.77)} мл 
        (${resultatMin = Math.trunc(DIP*(7.77-0.46))} - 
        ${resultatMax = Math.trunc(DIP*(7.77+0.46))})
        `};
      }
    }

    default: return state
  }
}
