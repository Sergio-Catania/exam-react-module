import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const apiKey = import.meta.env.VITE_API_KEY

function PersonPage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Errore nella chiamata API: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
          setPerson(data);
        }
      } catch (error) {
        console.error('Errore durante il recupero del personaggio:', error);
      }
    };

    fetchPerson();
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  const { name, sex, age, occupation, imagePath, biography } = person;

  return (
    <div>
      <img src={imagePath} alt={name} />
      <h2>{name}</h2>
      <p>Sex: {sex}</p>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <p>Biography: {biography}</p>
    </div>
  );
}

export default PersonPage;