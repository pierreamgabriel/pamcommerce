import { SET_ADMIN_COMPONENT } from '../actions/actionTypes'

const initialState = {
	name: "products",
	key: "",
};
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_ADMIN_COMPONENT:
		return {...state, [action.payload.key]:action.payload.value};
		default:
		return state;
	}
};

export default reducer;