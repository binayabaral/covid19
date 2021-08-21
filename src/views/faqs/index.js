import React, { useContext, useState } from 'react';
import { FaqsArticles } from '../../contexts/FaqsContext';

import Faq from './components/Faq';

const Faqs = () => {
  const faqs = useContext(FaqsArticles);

  const [nepali, setNepali] = useState(false);

  const handleLanguageChange = e => {
    if (e.target.value === 'nepali') {
      setNepali(true);
    } else {
      setNepali(false);
    }
  };

  return (
    <section className="faqs">
      <div className="container">
        <h1>FAQs about COVID-19</h1>
        <h6>Following are the frequently asked questions</h6>
        <span>Select Language: </span>
        <select id="language" onChange={handleLanguageChange}>
          <option value="english">English</option>
          <option value="nepali">Nepali</option>
        </select>
        <div className="faqs-listing">
          {faqs.map(faq => (
            <Faq key={faq._id} faq={faq} nepali={nepali} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
