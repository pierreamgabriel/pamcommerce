import { Types } from "../actions/actionTypes";

const initialState = {
  dbname: "pamcommerce",
  hostname: "localhost",
  hostuser: "",
  hostpass: "",
  sitename: "",
  email: "",
  password: "",
};

interface Action {
  type: typeof Types.SET_INSTALL_DETAILS;
  payload: {
    key: string;
    value: string;
  };
}
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_INSTALL_DETAILS:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

export default reducer;
