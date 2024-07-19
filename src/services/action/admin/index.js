import { appActions } from "..";

export const getClientListAction = (payload) => ({
  type: appActions.GET_CLIENT_LIST,
  payload,
});
