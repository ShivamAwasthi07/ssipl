import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
} from "@mui/material";
import {
  Header,
  StyledTableContainer,
  StyledTableHead,
  StyledTableRow,
  Title,
} from "./styles";
import FilterButton from "../filter";
import AddButton from "../atoms/addButton";

const CustomTable = ({
  columns,
  rows,
  title = "Table Name",
  addButtonVisible = false,
  isFilterable = false,
  onAddClick,
  onRowClick,
}) => {
  return (
    <StyledTableContainer component={Paper}>
      <Header>
        <Title>
          <span className="fading-border">{title}</span>
        </Title>
        <Stack direction="row" spacing={2}>
          {addButtonVisible && <AddButton onClick={onAddClick} />}
          {isFilterable && <FilterButton />}
        </Stack>
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
