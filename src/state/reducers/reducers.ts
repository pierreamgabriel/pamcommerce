import { combineReducers } from "redux";
import setInstallDetails from "./installDetails";
import setAdminComponent from "./adminComponent";
import setSettings from "./siteSettings";
import addProductDetails from "./productDetails";

const reducers = combineReducers({
  installDetails: setInstallDetails,
  adminComponent: setAdminComponent,
  settings: setSettings,
  productDetails: addProductDetails,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
