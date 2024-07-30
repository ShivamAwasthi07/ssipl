import React, { useState, useEffect, useCallback } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import debounce from "lodash/debounce";
import { ICONS } from "../../assets/icons"; // Make sure this includes a clear icon
import { CustomTextField } from "../inputs/style";
import ClearIcon from "@mui/icons-material/Clear"; // You can replace this with your custom clear icon if needed

const SearchBar = ({ onChange, delay = 300 }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedChangeHandler = useCallback(
    debounce((value) => {
      onChange(value);
    }, delay),
    [onChange, delay]
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  
  const clearSearch = () => {
    setSearchTerm("");
    debouncedChangeHandler("");
  };

  return (
    <CustomTextField
      variant="outlined"
      size="small"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
      sx={{ marginRight: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{ICONS.search}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={clearSearch} style={{visibility: searchTerm ? "visible" : "hidden"}}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
