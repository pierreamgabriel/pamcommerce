import { Types } from "../actions/actionTypes";

const initialState = {
  name: "",
  url: "",
  description: "",
  images: [],
  price: 0,
  quantity: 0,
  max: 0,
  promoprice: 0,
};

interface Action {
  type: typeof Types.ADD_PRODUCT_DETAILS;
  payload: {
    value: string;
  };
  task: 'add' | 'change'
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.ADD_PRODUCT_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
