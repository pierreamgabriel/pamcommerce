import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSettings, setInstallDetails } from "../state";
import axios from "axios";
import { RootState } from "../state/reducers/reducers";

const logo = require("./pam-logo.png");

function Installation() {
  const [state, setState] = useState("instructions");
  const [createDB, setCreateDB] = useState("install-db-success");
  const site = useSelector((state: RootState) => state.settings);
  const db = useSelector((state: RootState) => state.installDetails);
  const dispatch = useDispatch();
  const langFile = require("./lang/" + site.lang);
  const langOptions = require("./lang/index");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setInstallDetails({ key: name, value: value }));
  };
  const connect = async () => {
    await axios.post("./api/create-db-config.php", {
      hostname: db.hostname,
      hostuser: db.hostuser,
      hostpass: db.hostpass,
      dbname: db.dbname,
    });
    axios.post("./api/create-db.php", {}).then(function (response) {
      if (response.data.error === true) {
        setCreateDB("install-db-error");
      } else {
        setCreateDB("install-db-success");
        setState("install");
      }
    });
  };

  const install = async () => {
    await axios
      .post("./api/create-db-table.php", {
        sitename: db.sitename,
        email: db.email,
        password: db.password,
        language: site.lang,
      })
      .then((response) => {
        if (response.data.error === true) {
          setCreateDB("install-db-error");
        } else {
          setCreateDB("install-db-success");
          setState("install");
        }
      });
  };
  switch (state) {
    case "create":
      return (
        <div className="install-page">
          &nbsp;
          <LogoImage />
          <div className="container-fluid install-form-main">
            <form>
              <div className="mb-3">
                <label className="form-label install-label">
                  {langFile._createDB[0]}
                </label>
                <input
                  type="text"
                  name="dbname"
                  value={db.dbname}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <p className="install-db-text">{langFile._createDB[1]}</p>
              </div>
              <div className="mb-3">
                <label className="form-label install-label">
                  {langFile._createDB[2]}
                </label>
                <input
                  type="text"
                  name="hostuser"
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <p className="install-db-text">{langFile._createDB[3]}</p>
              </div>
              <div className="mb-3">
                <label className="form-label install-label">
                  {langFile._createDB[4]}
                </label>
                <input
                  type="password"
                  name="hostpass"
                  onChange={handleChange}
                  className="form-control"
                />
                <p className="install-db-text">{langFile._createDB[5]}</p>
              </div>
              <div className="mb-3">
                <label className="form-label install-label">
                  {langFile._createDB[6]}
                </label>
                <input
                  type="text"
                  name="hostname"
                  value={db.hostname}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <p className="install-db-text">{langFile._createDB[7]}</p>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={connect}
              >
                {langFile._createDB[8]}
              </button>
              <div className={createDB}>{langFile._createDB[9]}</div>
            </form>
          </div>
        </div>
      );
    case "install":
      return (
        <div className="install-page">
          &nbsp;
          <LogoImage />
          <div className="container-fluid install-form-main">
            <h5 className="install-finish-title">{langFile._install[0]}</h5>
            <form>
              <div className="mb-3">
                <label className="form-label install-label">
                  {langFile._install[1]}
                </label>
                <input
                  type="text"
                  name="sitename"
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label install-label">
                  {langFile._install[2]}
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label install-label">
                  {langFile._install[3]}
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button
                type="button"
                onClick={install}
                className="btn btn-secondary"
              >
                {langFile._install[4]}
              </button>
              <div className={createDB}>{langFile._install[5]}</div>
            </form>
          </div>
        </div>
      );
    default:
      return (
        <div className="install-page">
          &nbsp;
          <LogoImage />
          <div className="container-fluid install-form-main">
            <div className="mb-3">
              <label className="form-label">Choose a language:</label>
              <select
                defaultValue={site.lang}
                className="form-select"
                onChange={(e) =>
                  dispatch(setSettings({ key: "lang", value: e.target.value }))
                }
              >
                <option>Choose a language</option>
                {langOptions.lang.map((option: string) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
            <h2 className="install-title">{langFile._instructions[0]}</h2>
            <p>{langFile._instructions[1]}</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setState("create")}
            >
              {langFile._instructions[2]}
            </button>
          </div>
        </div>
      );
  }
}

function LogoImage() {
  return (
    <div className="container-fluid install-logo">
      <div className="row">
        <img
          src={logo}
          className="img-fluid install-logo-img mx-auto"
          alt="PamCommerce logo"
        />
      </div>
    </div>
  );
}

export default Installation;
