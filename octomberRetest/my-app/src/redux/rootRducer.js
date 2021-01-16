import cocktailReducer from './reducers/cocktailReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cocktailState: cocktailReducer
  });
  
  export default rootReducer;
  