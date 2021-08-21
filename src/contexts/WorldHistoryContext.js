import React, { createContext, useState, useEffect } from 'react';

import getHistoryData from '../api/World';

export const WorldHistoryData = createContext();

const WorldHistoryDataProvider = props => {
  const [worldHistoryData, setWorldHistoryData] = useState([]);

  useEffect(() => {
    const fetchWorldHistoryData = async () => {
      const data = await getHistoryData();
      setWorldHistoryData(data);
    };
    fetchWorldHistoryData();
  }, []);

  return <WorldHistoryData.Provider value={worldHistoryData}>{props.children}</WorldHistoryData.Provider>;
};

export default WorldHistoryDataProvider;
