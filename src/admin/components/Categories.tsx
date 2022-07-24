import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers/reducers";

export function Categories() {
  const site = useSelector((state: RootState) => state.settings);
  const langFile = require("../lang/" + site.lang);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>{langFile.addCategories[0]}</h5>
          <div className="mb-3">
            <label className="form-label">{langFile.addCategories[1]}</label>
            <input className="form-control" type="text" name="name" />
            <p>{langFile.addCategories[2]}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">{langFile.addCategories[3]}</label>
            <input className="form-control" type="text" name="urlname" />
            <p>{langFile.addCategories[4]}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">{langFile.addCategories[5]}</label>
            <input className="form-control" type="text" name="parent" />
            <p>{langFile.addCategories[6]}</p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "1rem" }}
          >
            {langFile.addCategories[7]}
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
