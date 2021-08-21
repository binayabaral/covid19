import axios from 'axios';

const faqsURL = 'https://corona.askbhunte.com/api/v1/faqs';

const getFaqs = async () => {
  try {
    const {
      data: { data }
    } = await axios.get(faqsURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getFaqs;
