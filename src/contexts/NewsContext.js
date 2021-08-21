import React, { createContext, useState, useEffect } from 'react';

import getNews from '../api/News';

export const NewsArticles = createContext();

const NewsArticlesProvider = props => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getNews();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  return <NewsArticles.Provider value={articles}>{props.children}</NewsArticles.Provider>;
};

export default NewsArticlesProvider;
