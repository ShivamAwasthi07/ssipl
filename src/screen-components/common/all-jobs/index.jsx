import React, { Fragment } from "react";
import JobCard from "../../../components/job-card/JobCard";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTE_USERTYPE from "../../../constants/RouteUsertype";
import ROUTES from "../../../constants/RouterConst";

const AllJobsOfClient = () => {
  const navigate = useNavigate();

  const handleJobCard = (id) => {
    navigate(`/${ROUTE_USERTYPE.ADMIN}/${ROUTES.JOB_DETAIL}/${id}`);
  };
  
  return (
    <Fragment>
      <Grid container spacing={2} direction={"row"}>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <JobCard onViewClick={() => handleJobCard('iddd')} />
        </Grid>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <JobCard onViewClick={() => handleJobCard('iddd')} />
        </Grid>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <JobCard onViewClick={() => handleJobCard('iddd')} />
        </Grid>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <JobCard onViewClick={() => handleJobCard('iddd')} />
        </Grid>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <JobCard onViewClick={() => handleJobCard('iddd')} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AllJobsOfClient;
