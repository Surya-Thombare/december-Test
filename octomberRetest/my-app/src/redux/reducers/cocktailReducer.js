import {SEARCH_BY_INGREDIANT, TOGGLE_COCKTIL_STATE, GET_COCKTAIL} from '../actionTypes'

const initialState = {
    cocktail: [],
    isCocktailFetching: false,
  };
  
  const cocktailReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_COCKTAIL:
        return { ...state, cocktail: payload };
      case TOGGLE_COCKTIL_STATE:
        return { ...state, isCocktailFetching: !state.isCocktailFetching };
      default:
        return state;
    }
  };
  
  export default cocktailReducer;