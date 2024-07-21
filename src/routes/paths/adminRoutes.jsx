import ROUTES from "../../constants/RouterConst";
import ROUTE_USERTYPE from "../../constants/RouteUsertype";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PersonIcon from '@mui/icons-material/Person';

export const ADMIN_ROUTES = [
  {
    route: `/${ROUTE_USERTYPE.ADMIN}/${ROUTES.CLIENT_MANAGEMENT}`,
    name: "Client Management",
    icon: <PersonIcon/>,
  },
  {
    route: `/${ROUTE_USERTYPE.ADMIN}/${ROUTES.USER_MANAGEMENT}`,
    name: "User Management",
    icon: <SupervisorAccountIcon/>,
  },
  {
    route: `/${ROUTE_USERTYPE.ADMIN}/${ROUTES.WAREHOUSE_MANAGEMENT}`,
    name: "Warehouses",
    icon: <WarehouseIcon/>,
  },
];
