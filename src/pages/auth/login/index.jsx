import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/RouterConst";

const Login = () => {
  const navigate = useNavigate();
  const [tokenSet, setTokenSet] = useState(false);

  useEffect(() => {
    if (tokenSet) {
      navigate(`/${ROUTES.CLIENT_MANAGEMENT}`);
    }
  }, [tokenSet, navigate]);

  const func = () => {
    localStorage.setItem("token", "true");
    setTokenSet(true);
  };
  return (
    <Fragment>
      <div onClick={func} >Login</div>
      <div onClick={() => navigate(`/${ROUTES.CLIENT_MANAGEMENT}`)}>
        To ClientManagement
      </div>
      <div onClick={() => navigate(`/${ROUTES.WAREHOUSE_MANAGEMENT}`)}>
        To WarehouseManagement
      </div>
    </Fragment>
  );
};

export default Login;
