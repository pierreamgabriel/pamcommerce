import { 
SET_INSTALL_DETAILS,
SET_ADMIN_COMPONENT,
SET_SETTINGS,
ADD_PRODUCT_DETAILS	
} from './actionTypes';

export const setInstallDetails = (value) => {
	return {
		type: SET_INSTALL_DETAILS,
		payload:{ 
		key: value.key,
		value: value.value,	
		}
	};
};

export const setAdminComponent = (value) => {
	return {
		type: SET_ADMIN_COMPONENT,
		payload: value
	};
};

export const setSettings = (value) => {
	return {
		type: SET_SETTINGS,
		payload:{ 
		key: value.key,
		value: value.value,	
		}
	};
};

export const addProductDetails = (value) => {
	return {
		type: ADD_PRODUCT_DETAILS,
		payload: value
	};
};