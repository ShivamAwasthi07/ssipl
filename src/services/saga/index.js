// import { takeEvery, takeLatest } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import { sagaEngine } from "./sagaEngine";
import { appActions } from "../action";

function* mySaga() {
    yield takeLatest(appActions.LOGIN, sagaEngine);
}

export default mySaga;
