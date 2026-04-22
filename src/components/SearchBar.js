import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mb-3">
      <input
        type="text"
        className="form-control mr-sm-2"
        placeholder="Search by keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Search</button>
    </form>
  );
};

export default SearchBar;
