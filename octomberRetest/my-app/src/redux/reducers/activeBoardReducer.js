import { CONSTANTS } from "../actions/index";

const initialState = null;

const activeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_BOARD: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeBoardReducer;
