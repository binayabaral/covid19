import axios from 'axios';

const mythsURL = 'https://corona.askbhunte.com/api/v1/myths';

const getMyths = async () => {
  try {
    const {
      data: { data }
    } = await axios.get(mythsURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getMyths;
