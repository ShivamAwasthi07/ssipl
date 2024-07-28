// src/SearchBar.js
import React, { useState, useCallback } from "react";
import { InputAdornment, TextField } from "@mui/material";
import debounce from "lodash/debounce";
import { ICONS } from "../../assets/icons";

const SearchBar = ({ onChange, delay = 300 }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedChangeHandler = useCallback(
    debounce((value) => {
      onChange(value);
    }, delay),
    []
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedChangeHandler(value);
  };

  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
      sx={{ marginRight: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {ICONS.search}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
