import { adminApi } from "./adminApi";
import { authApi } from "./authApi";
import { clientApi } from "./clientApi";
import { commonApi } from "./commonApi";

export const appApi = {
  ...commonApi,
  ...clientApi,
  ...adminApi,
  ...authApi,
};
