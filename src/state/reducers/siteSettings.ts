import { SET_SETTINGS } from "../actions/actionTypes";

const initialState = {
  sitename: "",
  lang: "en_us",
};

interface Action {
  type: typeof SET_SETTINGS;
  payload: {
    key: string;
    value: string;
  };
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

export default reducer;
