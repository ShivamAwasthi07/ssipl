import { put, call } from "redux-saga/effects";
import { appActions } from "../action";
import { appApi } from "../api";

export function* sagaEngine({ type, payload }) {
  try {
    yield put({ type: `${appActions[type]}_START`, request: payload });
    const response = yield call(appApi[type], payload);
    // response?.data?.message && olibrToast.success(response?.data?.message);
    payload?.cb && payload.cb(response?.data);
    yield put({
      type: `${appActions[type]}_SUCCESS`,
      payload: response.data,
      request: payload,
    });
  } catch (error) {
    payload?.errorCb && payload.errorCb(error?.response?.data);
    // olibrToast.error(error?.response?.data?.message);
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      yield put({ type: `${appActions[type]}_FAIL` });
    }
    yield put({ type: `${appActions[type]}_FAIL` });
  }
}
