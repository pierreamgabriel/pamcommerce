import { SET_ADMIN_LANG } from '../actions/actionTypes'

const initialState = {
	code: "en",
};
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_ADMIN_LANG:
		return {code: action.code};
		default:
		return state;
	}
};

export default reducer;