import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Header,
  StyledTableContainer,
  StyledTableHead,
  StyledTableRow,
  Title,
} from "./styles";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SearchBar from "../searchbar";

const CustomTable = ({
  columns,
  rows,
  title = "Table Name",
  addButtonVisible = true,
  isSearchable = true,
  isFilterable = true,
  onAddClick,
  onRowClick,
}) => {
  const hitApi = (e) => {
    console.log(e);
  }
  return (
    <StyledTableContainer component={Paper}>
      <Header>
        <Title>{title}</Title>
        <span style={{ textAlign: "right" }}>
          {addButtonVisible && (
            <IconButton
              edge="end"
              onClick={onAddClick}
              style={{ padding: 0, paddingRight: 10, color: "black" }}
              aria-label="close"
            >
              <AddCircleOutlineRoundedIcon />
            </IconButton>
          )}
          {isSearchable && (
            <SearchBar onChange={hitApi}/>
          )}
          {isFilterable && (
            <div></div>
          )}
        </span>
      </Header>
      <Table>
        <StyledTableHead>
          <TableRow>
            {columns?.map((column) => (
              <TableCell key={column.field}>{column?.headerName}</TableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows?.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex} onClick={() => onRowClick(row)}>
              {columns?.map((column) => (
                <TableCell key={column?.field}>{row[column?.field]}</TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CustomTable;
