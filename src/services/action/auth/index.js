import { appActions } from "..";

export const loginAction = (payload) => ({
  type: appActions.LOGIN,
  payload,
});
