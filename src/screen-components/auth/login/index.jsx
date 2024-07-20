import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../services/action/auth";
import AppButton from "../../../components/button";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Typography,
  Link,
} from "@mui/material";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
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
            background: "url(https://images.unsplash.com/photo-1548504769-900b70ed122e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          SSIPL
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
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <AppButton
                title="Log In"
                loadingType={true}
                isLoading={false}
                loadPosition={"end"}
                onClick={onLogin}
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
