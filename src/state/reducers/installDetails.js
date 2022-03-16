import { SET_INSTALL_DETAILS } from '../actions/actionTypes'

const initialState = {
	dbname: "pamcommerce",
	hostname: "localhost",
};
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_INSTALL_DETAILS:
		return {...state, [action.payload.key]:action.payload.value};
		default:
		return state;
	}
};

export default reducer;