import axios from 'axios';

const newsURL = 'https://corona.askbhunte.com/api/v1/news';

const getNews = async () => {
  try {
    const {
      data: { data }
    } = await axios.get(newsURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getNews;
