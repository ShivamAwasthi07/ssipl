import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import AppButton from "../button";
import { ICONS } from "../../assets/icons";
import AppChip from "../atoms/AppChip";

const JobCard = ({onViewClick, onDownloadClick}) => {
  const jobId = "sdfk3895489hj";
  const shipperName = "shivam";
  const receivedDate = "2024-07-30";
  const commodities = ["Commodity 1", "Commodity 2", "Commodity 3"];

  return (
    <Card sx={{ margin: "auto", borderRadius: "6px", boxShadow: 2 }}>
      <CardContent>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" component="div">
              Job ID: {jobId}
            </Typography>
            <Typography color="text.secondary">
              Shipper Name: {shipperName}
            </Typography>
            <Typography color="text.secondary">
              Received Date: {receivedDate}
            </Typography>
            <Box mt={2}>
              {commodities.map((commodity, index) => (
                <AppChip
                  key={index}
                  label={commodity}
                  sx={{ margin: "2px" }}
                  variant="outlined"
                  onDelete={() => console.log("sd")}
                />
              ))}
            </Box>
          </Grid>
          <Grid item>
            <AppButton
              variant="outlined"
              size="small"
              startIcon={ICONS.download}
              title="Download"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Box textAlign="right" p={2}>
        <AppButton title="View" variant="contained" endIcon={ICONS.view} onClick={onViewClick}/>
      </Box>
    </Card>
  );
};

export default JobCard;
