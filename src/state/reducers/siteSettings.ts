import { Types } from "../actions/actionTypes";

const initialState = {
  sitename: "",
  lang: "en_us",
  productsList: [],
};

interface StateProps {
  sitename: string;
  lang: string;
  productsList: Array<object>;
}

type ActionType = typeof Types.SET_SETTINGS | typeof Types.LOAD_PRODUCTS | Types.APPEND_PRODUCTS;

interface Action {
  type: ActionType;
  payload: {
    key: string;
    value: string | [];
  };
}

const reducer = (state: StateProps = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_SETTINGS:
      return { ...state, [action.payload.key]: action.payload.value };
    case Types.LOAD_PRODUCTS:
      return { ...state };
      case Types.APPEND_PRODUCTS:
        return { ...state, [action.payload.key]: action.payload.value };  
    default:
      return state;
  }
};

export default reducer;
