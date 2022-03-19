import { useSelector } from 'react-redux';
import cpList from './cpList';


function CoreComponents(arg) {

const cp = useSelector((state) => state.adminComponent);
let Component;

if (cp.subcomponent != "") {
Component = cpList[cp.subcomponent];  
} else {
Component = cpList[cp.component];  
}

	return(
	<div className="container-fluid core-main">
	<Component />	
	</div>
	);	

}
export default CoreComponents;
