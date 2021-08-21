import axios from 'axios';

const worldData = 'https://corona.askbhunte.com/api/v1/data/world';

const getHistoryData = async () => {
  try {
    const { data } = await axios.get(worldData);
    delete data[0];
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getHistoryData;
