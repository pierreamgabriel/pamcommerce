import {
  SET_INSTALL_DETAILS,
  SET_ADMIN_COMPONENT,
  SET_SETTINGS,
  ADD_PRODUCT_DETAILS,
} from "./actionTypes";

interface ValueType {
  key: string;
  value: string;
}

export const setInstallDetails = (value: ValueType) => {
  return {
    type: SET_INSTALL_DETAILS,
    payload: {
      key: value.key,
      value: value.value,
    },
  };
};

export const setAdminComponent = (value: object) => {
  return {
    type: SET_ADMIN_COMPONENT,
    payload: value,
  };
};

export const setSettings = (value: ValueType) => {
  return {
    type: SET_SETTINGS,
    payload: {
      key: value.key,
      value: value.value,
    },
  };
};

export const addProductDetails = (value: object) => {
  return {
    type: ADD_PRODUCT_DETAILS,
    payload: value,
  };
};
