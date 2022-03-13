import { combineReducers } from 'redux';
import setAdminLang from './adminLang';

const reducers = combineReducers({
	adminLang: setAdminLang,
});

export default reducers;