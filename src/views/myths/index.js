import React, { useContext } from 'react';
import { MythArticles } from '../../contexts/MythsContext';

import Myth from './components/Myth';

const Myths = () => {
  const myths = useContext(MythArticles);
  return (
    <section className="myth">
      <div className="container">
        <h1>Myths about COVID-19</h1>
        <h6>Know COVID-19 better. Don't run after the myths.</h6>
        <div className="myth-articles">
          {myths.map(myth => (
            <Myth key={myth._id} myth={myth} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Myths;
