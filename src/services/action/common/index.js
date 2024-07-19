import { appActions } from "..";

export const getJobListAction = (payload) => ({
  type: appActions.GET_JOB_LIST,
  payload,
});
