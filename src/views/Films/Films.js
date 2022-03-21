import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';



export default function Films() {
  const [films, setFilms] = useState ([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchFilms();
        setFilms(resp);
      } catch (e) {
        alert(e.message);
      }
      
    };
    fetch();

  }, []);

  return ( 
    <div className='films'>
      {films.map((film) => ( 
        <div key={film.id}>
          <h2>Title: {film.title}</h2>
          <p>Box Office: {film.box_office_total}</p>
          <p>Acadamy Awards Nominations:  {film.academy_award_nominations}</p>
        </div>
      ))}
    </div>
  );
}

