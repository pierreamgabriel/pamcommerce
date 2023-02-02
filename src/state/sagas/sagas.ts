import { CoreSagas } from "./CoreSagas";
import { takeLatest } from "redux-saga/effects";
import {Types} from '../actions/actionTypes'

export default function* allSagas () {
    yield takeLatest(Types.ADD_PRODUCT, CoreSagas.products)
    yield takeLatest(Types.LOAD_PRODUCTS, CoreSagas.productsList)
}