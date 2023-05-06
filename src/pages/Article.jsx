import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from '../content/articles.json';

const Article = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchedArticle = articles.find((article) => article.id === parseInt(id));
    setArticle(fetchedArticle);
  }, [id]);

  return (
    <div>
      {article ? (
        <>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Article;
