import React from 'react';
import articles from '../content/articles.json';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>{article.title}</Link>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;
