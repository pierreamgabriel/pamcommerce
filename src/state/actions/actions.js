import { SET_ADMIN_LANG } from './actionTypes';

export const setAdminLang = (value) => {
	return {
		type: SET_ADMIN_LANG,
		code: value,
	};
};