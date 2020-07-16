import axios from 'axios';

const worldHistoryURL = 'https://nepalcorona.info/api/v1/data/world';

const getHistoryData = async () => {
	try {
		const { data } = await axios.get(worldHistoryURL);
		delete data[0];
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getHistoryData;
