import axios from 'axios';

const nepalDataURL = 'https://nepalcorona.info/api/v1/data/nepal';
const summaryDataURL = 'https://data.nepalcorona.info/api/v1/covid/summary';
const districtDataURL = 'https://data.nepalcorona.info/api/v1/districts';
// const municipalityDataURL = 'https://data.nepalcorona.info/api/v1/municipals';

let selectedRegionData = {
	infected: 0,
	active: 0,
	recoveries: 0,
	deaths: 0,
};
let districtList = [];
let municipalityList = [];

let url = '';

const getSelectedRegionData = async (p, d, m) => {
	if (p && d && m) {
		url = summaryDataURL;
		const { municipality } = await fetchRequiredData();
		if (municipality.cases.filter(element => element.municipality === Number(m))[0]) {
			selectedRegionData.infected = municipality.cases.filter(element => element.municipality === Number(m))[0].count;
		} else {
			selectedRegionData.infected = 0;
		}

		if (municipality.recovered.filter(element => element.municipality === Number(m))[0]) {
			selectedRegionData.recoveries = municipality.recovered.filter(element => element.municipality === Number(m))[0].count;
		} else {
			selectedRegionData.recoveries = 0;
		}

		if (municipality.deaths.filter(element => element.municipality === Number(m))[0]) {
			selectedRegionData.deaths = municipality.deaths.filter(element => element.municipality === Number(m))[0].count;
		} else {
			selectedRegionData.deaths = 0;
		}

		selectedRegionData.active = selectedRegionData.infected - selectedRegionData.recoveries - selectedRegionData.deaths;
		districtList = await getDistrictList(p);
	} else if (p && d) {
		url = `${districtDataURL}/${d}`;
		const data = await fetchRequiredData();
		if (data.covid_summary.cases) {
			selectedRegionData.infected = data.covid_summary.cases;
		} else {
			selectedRegionData.infected = 0;
		}

		if (data.covid_summary.recovered) {
			selectedRegionData.recoveries = data.covid_summary.recovered;
		} else {
			selectedRegionData.recoveries = 0;
		}

		if (data.covid_summary.death) {
			selectedRegionData.deaths = data.covid_summary.death;
		} else {
			selectedRegionData.deaths = 0;
		}

		selectedRegionData.active = selectedRegionData.infected - selectedRegionData.recoveries - selectedRegionData.deaths;
		districtList = await getDistrictList(p);
		municipalityList = [];
		data.municipalities.forEach(element => {
			municipalityList.push({
				id: element.id,
				name: element.title,
			});
		});
	} else if (p) {
		url = summaryDataURL;
		const { province } = await fetchRequiredData();

		if (province.cases.filter(element => element.province === Number(p))[0]) {
			selectedRegionData.infected = province.cases.filter(element => element.province === Number(p))[0].count;
		} else {
			selectedRegionData.infected = 0;
		}

		if (province.recovered.filter(element => element.province === Number(p))[0]) {
			selectedRegionData.recoveries = province.recovered.filter(element => element.province === Number(p))[0].count;
		} else {
			selectedRegionData.recovered = 0;
		}

		if (province.deaths.filter(element => element.province === Number(p))[0]) {
			selectedRegionData.deaths = province.deaths.filter(element => element.province === Number(p))[0].count;
		} else {
			selectedRegionData.deaths = 0;
		}
		selectedRegionData.active = selectedRegionData.infected - selectedRegionData.recoveries - selectedRegionData.deaths;
		districtList = await getDistrictList(p);
		municipalityList = [];
	} else {
		url = nepalDataURL;
		const data = await fetchRequiredData();
		selectedRegionData.infected = data.tested_positive;
		selectedRegionData.active = data.tested_positive - data.recovered - data.deaths;
		selectedRegionData.recoveries = data.recovered;
		selectedRegionData.deaths = data.deaths;

		districtList = [];
		municipalityList = [];
	}

	return [selectedRegionData, districtList, municipalityList];
};

export default getSelectedRegionData;

const fetchRequiredData = async () => {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const getDistrictList = async provinceNumber => {
	let functionalDistrictList = [];
	try {
		const { data } = await axios.get(districtDataURL);
		const districtDetails = data.filter(element => element.province === Number(provinceNumber));
		districtDetails.forEach(element => {
			functionalDistrictList.push({
				id: element.id,
				name: element.title,
			});
		});
		return functionalDistrictList;
	} catch (error) {
		console.log(error);
	}
};
