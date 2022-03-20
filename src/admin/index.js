import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSettings, setAdminComponent } from '../state/';
import CoreComponents from './CoreComponents';
import axios from 'axios';
import logo from './pam-logo.png';


function Admin() {

const dispatch = useDispatch();	
const site = useSelector((state) => state.settings);	
	
useEffect(() => {
axios.post('./api/read.php', {
    table: 'settings',
  }).then(function (response) {
console.log(response);	
response.data.all_data.map((data) => {
const name = Object.keys(data)[1];
const value = Object.values(data)[1];
dispatch(setSettings({key: name, value: value}));	
});
  });
}, []);	
		
	return(
	<div>	
	<TopBar name={site.sitename}/>
	<LeftBar lang={site.lang}/>	
	<CoreComponents />	
	</div>	
	);
}

export function TopBar(prop) {

	return(
	<div className="container-fluid admin-top-bar">
	<div className="row">
	<div className="col">
	<i className="icofont-home top-bar-icons"></i>
	<span style={{marginLeft: "5px"}}>{prop.name}</span>	
	</div>
	<div className="col">	
	</div>
	<div className="col">	
	</div>	
	</div>	
	</div>	
	);
}
function LeftBar(prop) {
const langFile = require('./lang/' + prop.lang);
const dispatch = useDispatch();	
const active = useSelector((state) => state.adminComponent);	
const setCP = (arg) =>{
dispatch(setAdminComponent({"component": arg, "subcomponent": ""}));	
}	
	
	return(
	<div className="container-fluid admin-leftbar-main">
	{langFile._leftSideBar.map((icon, index) => {
	const cp = Object.values(icon)[1];	
	return(
	<div className={active.component === cp ? "row admin-leftbar-active" : "row admin-leftbar-row"} key={index} onClick={() => setCP(cp)}>
	<div className="col admin-leftbar-col admin-leftbar-left-col"><i className={Object.values(icon)[0]} /></div>
	<div className="col admin-leftbar-col">{Object.keys(icon)[0]}</div>	
	</div>
	);	
	})}
	<div className="row">
	<img src={logo} className="img-fluid admin-left-bar-logo mx-auto" />	
	</div>
	</div>	
	);
}
	

export default Admin;