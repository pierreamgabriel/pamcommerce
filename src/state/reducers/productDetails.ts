import { ADD_PRODUCT_DETAILS } from "../actions/actionTypes";

const initialState = {
  name: "",
  description: "",
  images: [],
  price: 0,
  quantity: 0,
  max: 0,
  promoprice: 0,
};

interface Action {
  type: typeof ADD_PRODUCT_DETAILS;
  payload: {
    value: string;
  };
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_PRODUCT_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
