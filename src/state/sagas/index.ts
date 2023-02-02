import { all } from "redux-saga/effects";
import SagasList from "./sagas";

export default function* rootSagas () {
  yield all([SagasList()]);
}
