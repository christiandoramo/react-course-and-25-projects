import React from "react";
import { SearchButton, InputField, InputWrapper } from "./styles";

const SearchInput = ({ books, searchTerm }) => {
  function filtrar() {
    books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return (
    <InputWrapper>
      <InputField
        type="text"
        placeholder="Search for a book here"
        value={searchTerm}
      />
      <SearchButton onSubmit={filtrar()} />
    </InputWrapper>
  );
};

export default SearchInput;
