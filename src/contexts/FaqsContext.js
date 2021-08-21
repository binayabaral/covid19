import React, { createContext, useState, useEffect } from 'react';

import getFaqs from '../api/Faqs';

export const FaqsArticles = createContext();

const FaqsArticlesProvider = props => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const faqs = await getFaqs();
      setFaqs(faqs);
    };
    fetchFaqs();
  }, []);

  return <FaqsArticles.Provider value={faqs}>{props.children}</FaqsArticles.Provider>;
};

export default FaqsArticlesProvider;
