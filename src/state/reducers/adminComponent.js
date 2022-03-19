import { SET_ADMIN_COMPONENT } from '../actions/actionTypes'

const initialState = {
	component: "Dashboard",
	subcomponent: "",
};
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_ADMIN_COMPONENT:
		return {...state, 
		...action.payload};
		default:
		return state;
	}
};

export default reducer;