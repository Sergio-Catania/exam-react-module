import React, { useState } from 'react';
import PersonCard from './PersonCard';
import SearchBar from './SearchBar';
const apiKey = import.meta.env.VITE_API_KEY;


const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchValue) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchValue}`
      );

      if (!response.ok) {
        throw new Error(`Errore nella chiamata API`);
      }

      const data = await response.json();

      if (data.results) {
        setSearchResults(data.results);
      }
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
    }
  };

  return (
    <div>
      <h1>Risultati della ricerca</h1>
      <SearchBar onSearch={handleSearch} />
      {searchResults.map((person) => (
        <PersonCard key={person.id} {...person} />
      ))}
    </div>
  );
};

export default SearchPage;