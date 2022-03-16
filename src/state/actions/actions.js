import { 
SET_INSTALL_DETAILS,
SET_ADMIN_COMPONENT,
SET_SETTINGS	
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
		payload:{ 
		key: value.key,
		value: value.value,	
		}
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