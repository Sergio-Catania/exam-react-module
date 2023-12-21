import React, { useEffect, useState } from 'react';
import PersonCard from './PersonCard';
const apiKey = import.meta.env.VITE_API_KEY

const HomePage = () => {
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`);
        const data = await response.json();
        setPopularPeople(data.results); 
        console.log(data.results)
      } catch (error) {
        console.error('Errore nella richiesta API:', error.message);
      }
    };

    fetchPopularPeople();
  }, []);

  return (
    <div>
      <h1>Popular People</h1>
      {popularPeople.map(person => (
        <PersonCard key={person.id} {...person} />
      ))}
    </div>
  );
}

export default HomePage;