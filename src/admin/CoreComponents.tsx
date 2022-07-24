import { useSelector } from "react-redux";
import cpList from "./cpList";
import { RootState } from "../state/reducers/reducers";

function CoreComponents() {
  const cp = useSelector((state: RootState) => state.adminComponent);
  let Component;

  if (cp.subcomponent !== "") {
    Component = cpList[cp.subcomponent as keyof typeof cpList];
  } else {
    Component = cpList[cp.component as keyof typeof cpList];
  }

  return (
    <div className="container-fluid core-main">
      <Component />
    </div>
  );
}
export default CoreComponents;
