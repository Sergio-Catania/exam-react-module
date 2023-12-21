import React from 'react';
import { Link } from 'react-router-dom';

const PersonCard = ({ id, name, known_for_department, gender, popularity, known_for, profile_path}) => {
  const sex = gender === 2 ? 'M' : 'F';
  const occupation = known_for_department;
  const works = known_for.map((item) => item.title);
  const imagePath = `https://image.tmdb.org/t/p/w200${profile_path}`;

  return (
      <Link className='card' to={`/person/${id}`}>
        <img src={imagePath} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>Occupation: {occupation}</p>
        <p>Sex: {sex}</p>
        <p>Popularity: {popularity}</p>
        <p>Works: {works ? works.join(`, `) : 'Nessun lavoro specificato'}</p>
      </div>
    </Link>
  );
};

export default PersonCard;