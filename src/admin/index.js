import React, { useState, useEffect } from 'react';
import '../lib/bootstrap/bootstrap.min.css';
import '../lib/icofont/icofont.min.css';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { adminLang } from '../state/actions/actions';

function Admin() {
	
const lang = useSelector((state) => state.adminLang);
const dispatch = useDispatch();	
console.log(lang.code);

	return(
	<>	
	<TopBar />
	<LeftBar lang={lang.code}/>	
	</>	
	);
}

function TopBar() {
	return(
	<div className="container-fluid top-bar">
	<div className="row">
	<div className="col">
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
const langFile = require('./lang/leftbar_' + prop.lang);	
	
	return(
	<div className="container-fluid leftbar-main">
	{langFile.map((icon, index) => {
	return(
	<div className="row leftbar-row" key={index}>
	<div className="col leftbar-col leftbar-left-col"><i className={Object.values(icon)[0]} /></div>
	<div className="col leftbar-col">{Object.keys(icon)[0]}</div>	
	</div>
	);	
	})}
	</div>	
	);
}
	

export default Admin;