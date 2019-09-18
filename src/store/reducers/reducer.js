import ActionTypes from "../actions/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CHOSEN_MENU:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
