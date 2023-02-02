import { Types } from "../actions/actionTypes";

export type ComponentsType =
  | "Dashboard"
  | "Products"
  | "AddProduct"
  | "Categories"
  | "Discounts"
  | "Orders"
  | "Customers"
  | "Pages"
  | "Layout"
  | "Settings"
  | "Users";

const initialState = {
  component: "Dashboard",
  subcomponent: "",
};

interface Action {
  type: typeof Types.SET_ADMIN_COMPONENT;
  payload: {
    value: ComponentsType;
  };
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_ADMIN_COMPONENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
