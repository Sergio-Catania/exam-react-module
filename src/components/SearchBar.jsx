import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca personaggio..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default SearchBar;