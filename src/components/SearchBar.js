import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 flex w-[360px] items-center rounded-full bg-[#282828] px-4 py-1.5">
      <FaSearch color="#b3b3b3" />
      <input 
        placeholder="Search" 
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="ml-2 w-full border-0 bg-transparent text-sm text-white outline-none placeholder:text-[#b3b3b3]"
      />
    </form>
  );
};

export default SearchBar;
