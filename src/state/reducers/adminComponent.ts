import { SET_ADMIN_COMPONENT } from "../actions/actionTypes";

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
  type: typeof SET_ADMIN_COMPONENT;
  payload: {
    value: ComponentsType;
  };
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ADMIN_COMPONENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
