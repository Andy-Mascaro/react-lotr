import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState ([]);
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchBooks();
        setBooks(resp);
      } catch (e) {
        alert(e.message);
      }
      
    };
    fetch();

  }, []);

  return ( 
    <div className='books'>
      {books.map((books) => ( 
        <div key={books.id}>
          <h2>Title: {books.title}</h2>
        </div>
      ))}
    </div>
  );
}