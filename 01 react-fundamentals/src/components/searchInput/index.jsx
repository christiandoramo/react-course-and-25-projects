import React from "react";
import { SearchButton, InputField, InputWrapper } from "./styles";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <InputWrapper>
      <InputField
        value={searchTerm}
        onChange={onSearchChange}
        type="text"
        placeholder="Search for a book here"
        name="searchTerm"
      />
      <SearchButton />
    </InputWrapper>
  );
};

export default SearchInput;
