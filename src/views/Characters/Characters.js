import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';

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

  }, []);

  return ( 
    <div className='characters'>
      {character.map((characters) => ( 
        <div key={characters.id}>
          <h1>{characters.name}</h1>
        </div>
      ))}
    </div>
  );
}

