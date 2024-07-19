import { appActions } from "../../action";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${appActions.LOGIN}_START`:
      return { ...state, isLogin: true };
    case `${appActions.LOGIN}_SUCCESS`:
        console.log(action)
      localStorage.setItem("token", "isenterererererer");
      return { ...state, isLogin: false };
    case `${appActions.LOGIN}_FAIL`:
      return { ...state, isLogin: false };
    default:
      return { ...state };
  }
};
