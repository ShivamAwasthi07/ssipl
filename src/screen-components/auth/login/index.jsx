import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../services/action/auth";
import AppButton from "../../../components/button";
import { Grid, Paper, Box, Typography, Link } from "@mui/material";
import SSIPLLogo from "./../../../assets/logos/logo.png";
import Input from "../../../components/inputs/Input";
import { useForm } from "react-hook-form";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { emailRegex } from "../../../utils/regex/regex";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { isLoginLoading } = useSelector((state) => state.authReducer);
  const {
    register: loginRegister,
    handleSubmit: loginSubmit,
    formState: { errors: loginError },
  } = useForm();

  const onLogin = (data) => {
    console.log(data);
    dispatch(loginAction({}));
  };
  return (
    <Fragment>
      <Grid container style={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            background:
              "url(https://images.unsplash.com/photo-1548504769-900b70ed122e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <img src={SSIPLLogo} alt="LOGO" height={150} />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          component={Paper}
          elevation={6}
          square
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
              maxWidth: 400,
            }}
          >
            <Typography component="h1" variant="h5">
              Login to SSIPL
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Input
                label="Email Address"
                {...loginRegister("email", {
                  required: true,
                  pattern: emailRegex,
                })}
                error={!!loginError.email}
              />
              <Input
                label="Password"
                type="password"
                {...loginRegister("password", {
                  required: true,
                })}
                error={!!loginError.password}
              />
              <AppButton
                title="Log In"
                loadingType={true}
                isLoading={isLoginLoading}
                loadPosition={"end"}
                endIcon={LockOpenIcon}
                onClick={loginSubmit(onLogin)}
                fullWidth={true}
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LoginScreen;
