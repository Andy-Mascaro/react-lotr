import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import Select from '../../components/Select';


export default function Characters() {
  const [character, setCharacter] = useState ([]);
  const [race, setRace] = useState ('All');
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchCharacters(race);
        setCharacter(resp);
      } catch (e) {
        alert(e.message);
      }
      
    };
    fetch();

  }, [race]);

  return ( 
    <div className='characters'>
      <Select setRace={setRace} />
      {character.map((characters) => ( 
        <div key={characters.id}>
          <h2>{characters.name}</h2>
          <p>Birth: {characters.birth}</p>
          <p>Death: {characters.death}</p>
          <p>Race: {characters.race}</p>
        </div>
      ))}
    </div>
  );
}

