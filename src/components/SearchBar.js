import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: #282828;
  border-radius: 50px;
  padding: 5px 15px;
  width: 360px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  width: 100%;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <FaSearch color="#b3b3b3" />
      <SearchInput 
        placeholder="Search" 
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
