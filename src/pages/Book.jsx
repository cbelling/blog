import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import books from '../content/books.json';

const Book = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchedBook = books.find((book) => book.id === parseInt(id));
    setBook(fetchedBook);
  }, [id]);

  return (
    <div>
      {book ? (
        <>
          <h2>{book.title}</h2>
          <p>{book.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Book;
