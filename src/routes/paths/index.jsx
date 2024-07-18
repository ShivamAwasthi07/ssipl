import { lazy } from "react";
import ROUTES from "../../constants/RouterConst";

export const protected_routes = [
  {
    path: ROUTES.CLIENT_MANAGEMENT,
    component: lazy(() => import("../../pages/admin/client-management/index")),
    exact: true,
  },
  {
    path: ROUTES.USER_MANAGEMENT,
    component: lazy(() => import("../../pages/admin/user-management/index")),
    exact: true,
  },
  {
    path: ROUTES.WAREHOUSE_MANAGEMENT,
    component: lazy(() =>
      import("../../pages/admin/warehouse-management/index")
    ),
    exact: true,
  },
];
