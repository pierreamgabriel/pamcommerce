import { SET_SETTINGS } from '../actions/actionTypes'

const initialState = {
	sitename: "",
	lang: "en_us",
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_SETTINGS:
		return {...state, [action.payload.key]:action.payload.value};
		default:
		return state;
	}
};

export default reducer;