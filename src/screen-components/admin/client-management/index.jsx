import React from "react";
import CustomTable from "../../../components/table/index";
import { IconButton, Stack } from "@mui/material";
import { ICONS } from "../../../assets/icons";
import { COLORS } from "../../../assets/colors";
import { useNavigate } from "react-router-dom";

let arr = [
  {
    sno: 1,
    name: "shivam",
    email: "shivam@yopmail.com",
    no_of_jobs: "2",
    phone: "99898889989",
  },
  {
    sno: 2,
    name: "awasthi",
    email: "awasthi@yopmail.com",
    no_of_jobs: "3",
    phone: "99898889989",
  },
  {
    sno: 3,
    name: "kumar",
    email: "kumar@yopmail.com",
    no_of_jobs: "8",
    phone: "99898889989",
  },
];

const columns = [
  { field: "sno", headerName: "S. no" },
  { field: "name", headerName: "Name" },
  { field: "email", headerName: "Email" },
  { field: "phone", headerName: "Number" },
  { field: "no_of_jobs", headerName: "Jobs" },
  { field: "action", headerName: "Actions" },
];

const ClientManagementScreen = () => {
  const navigate = useNavigate();

  const takeToView = (id) => {
    navigate(`${id}`)
  };

  const rows = arr.map((elem, index) => ({
    ...elem,
    action: (
      <Stack direction={"row"} spacing={2}>
        <IconButton sx={{ color: COLORS.theme }}>{ICONS.delete}</IconButton>
        <IconButton
          sx={{ color: COLORS.theme }}
          onClick={(e) => {
            e.stopPropagation();
            takeToView(elem.no_of_jobs);
          }}
        >
          {ICONS.view}
        </IconButton>
      </Stack>
    ),
  }));

  const disp = (row) => {
    console.log(row);
  };
  
  return (
    <CustomTable
      addButtonVisible={true}
      isFilterable={true}
      title="Client Management"
      columns={columns}
      rows={rows}
      onRowClick={disp}
    />
  );
};

export default ClientManagementScreen;
