import React from "react";
import { FaSearch } from "react-icons/fa";
import { TextField } from "@material-ui/core";
import "./SearchBar.sass";

const SearchBar = () => (
  <TextField
    color="primary"
    id="standard-search"
    InputProps={{
      endAdornment: <FaSearch className="searchIco" />,
    }}
    label="Buscar"
    type="search"
  />
);

export default SearchBar;
