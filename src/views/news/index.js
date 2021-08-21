import React, { useContext } from 'react';
import { NewsArticles } from '../../contexts/NewsContext';

import NewsArticle from './components/NewsArticle';

const RecentNews = () => {
  const articles = useContext(NewsArticles);
  return (
    <section className="news">
      <div className="container">
        <h1>Recent News on COVID-19</h1>
        <h6>Following are the Recent news from Nepali News Outlets</h6>
        <div className="news-articles">
          {articles.map(article => (
            <NewsArticle key={article._id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
