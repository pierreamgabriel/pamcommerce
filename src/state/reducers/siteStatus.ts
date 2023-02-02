import { Types } from "../actions/actionTypes";

const initialState = {
  isSaving: false,
  isSavingProductError: {status: false, msg: ''},
  isLoading: false,
  isLoadingError: false,
};

interface Action {
  type: typeof Types.SET_STATUS;
  payload: {
    key: string;
    value: string;
  };
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_STATUS:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

export default reducer;
