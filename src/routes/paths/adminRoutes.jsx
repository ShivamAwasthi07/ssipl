import { ICONS } from "../../assets/icons";
import ROUTES from "../../constants/RouterConst";
import ROUTE_USERTYPE from "../../constants/RouteUsertype";


export const ADMIN_ROUTES = [
  {
    route: `/${ROUTE_USERTYPE.ADMIN}/${ROUTES.CLIENT_MANAGEMENT}`,
    name: "Client Management",
    icon: ICONS.client,
  },
  {
    route: `/${ROUTE_USERTYPE.ADMIN}/${ROUTES.USER_MANAGEMENT}`,
    name: "User Management",
    icon: ICONS.admin,
  },
  {
    route: `/${ROUTE_USERTYPE.ADMIN}/${ROUTES.WAREHOUSE_MANAGEMENT}`,
    name: "Warehouses",
    icon: ICONS.warehouse,
  },
];
