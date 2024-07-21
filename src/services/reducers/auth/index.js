import { appActions } from "../../action";

const initialState = {
  loginData: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${appActions.LOGIN}_START`:
      return { ...state, isLoginLoading: true, loginData: {} };
    case `${appActions.LOGIN}_SUCCESS`:
      return { ...state, isLoginLoading: false, loginData: action };
    case `${appActions.LOGIN}_FAIL`:
      return { ...state, isLoginLoading: false, loginData: {} };
    default:
      return { ...state };
  }
};
