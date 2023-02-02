import { Types } from "./actionTypes";

interface ValueType {
  key: string;
  value: string;
}

export const setInstallDetails = (value: ValueType) => {
  return {
    type: Types.SET_INSTALL_DETAILS,
    payload: {
      key: value.key,
      value: value.value,
    },
  };
};

export const setAdminComponent = (value: object) => {
  return {
    type: Types.SET_ADMIN_COMPONENT,
    payload: value,
  };
};

export const setSettings = (value: ValueType) => {
  return {
    type: Types.SET_SETTINGS,
    payload: {
      key: value.key,
      value: value.value,
    },
  };
};

export const setStatus = (value: {
  key: string;
  value: string | boolean | object;
}) => {
  return {
    type: Types.SET_STATUS,
    payload: {
      key: value.key,
      value: value.value,
    },
  };
};

export const addProductDetails = (value: object) => {
  return {
    type: Types.ADD_PRODUCT_DETAILS,
    payload: value,
  };
};

export const addProduct = (value: object) => {
  return {
    type: Types.ADD_PRODUCT,
    task: "add",
    payload: value,
  };
};

export const loadProducts = () => {
  return {
    type: Types.LOAD_PRODUCTS,
  };
};

export const appendProducts = (value: {key: string, value: Array<object>}) => {
  return {
    type: Types.APPEND_PRODUCTS,
    payload: {
      key: value.key,
      value: value.value,
    },
  };
};
