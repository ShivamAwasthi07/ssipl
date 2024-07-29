import React from "react";
import CustomTable from "../../../components/table/index";

const ClientManagementScreen = () => {
  const columns = [
    { field: "sno", headerName: "S. no" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Number" },
    { field: "no_of_jobs", headerName: "Jobs" },
    { field: "action", headerName: "Actions" },
  ];

  const rows = [
    {
      sno: 1,
      name: "shivam",
      email: "shivam@yopmail.com",
      no_of_jobs: "2",
      phone: "99898889989",
      action: (
        <span
          onClick={(e) => {
            e.stopPropagation();
            console.log("first");
          }}
        >
          Del
        </span>
      ),
    },
    {
      sno: 2,
      name: "awasthi",
      email: "awasthi@yopmail.com",
      no_of_jobs: "3",
      phone: "99898889989",
      action: (
        <span
          onClick={(e) => {
            e.stopPropagation();
            console.log("first");
          }}
        >
          Del
        </span>
      ),
    },
    {
      sno: 3,
      name: "kumar",
      email: "kumar@yopmail.com",
      no_of_jobs: "8",
      phone: "99898889989",
      action: (
        <span
          onClick={(e) => {
            e.stopPropagation();
            console.log("first");
          }}
        >
          Del
        </span>
      ),
    },
  ];

  const disp = (row) => {
    console.log(row);
  };
  return (
    <CustomTable addButtonVisible={true} isFilterable={true} title="Client Management" columns={columns} rows={rows} onRowClick={disp} />
  );
};

export default ClientManagementScreen;
