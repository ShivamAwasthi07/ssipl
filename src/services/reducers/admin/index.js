import { appActions } from "../../action";

const initialState = {
  clientList: {},
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${appActions.GET_CLIENT_LIST}_START`:
      return { ...state, isLoading: true, clientList: {} };
    case `${appActions.GET_CLIENT_LIST}_SUCCESS`:
      return { ...state, isLoading: false, clientList: action.payload };
    case `${appActions.GET_CLIENT_LIST}_FAIL`:
      return { ...state, isLoading: false, clientList: {} };

    default:
      return { ...state };
  }
};
