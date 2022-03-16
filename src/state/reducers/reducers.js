import { combineReducers } from 'redux';
import setInstallDetails from './installDetails';
import setAdminComponent from './adminComponent';
import setSettings from './siteSettings';

const reducers = combineReducers({
	installDetails: setInstallDetails,
	adminComponent: setAdminComponent,
	settings: setSettings,
});

export default reducers;