import React, { useContext, useState, useEffect } from 'react';
import { WorldHistoryData } from '../../contexts/WorldHistoryContext';

import Selector from './components/Selector';
import StatBox from '../../common-components/StatBox';
import Graph from '../../common-components/Graph';

const World = () => {
	const worldHistoryData = useContext(WorldHistoryData);

	const [country, setCountry] = useState('World');
	const [countryData, setCountryData] = useState({
		infected: 0,
		active: 0,
		recoveries: 0,
		deaths: 0,
	});

	useEffect(() => {
		worldHistoryData.forEach(data => {
			if (data.country === country) {
				setCountryData({
					infected: data.totalCases,
					active: data.totalCases - data.totalDeaths - data.totalRecovered,
					recoveries: data.totalRecovered,
					deaths: data.totalDeaths,
				});
			}
		});
	}, [country, worldHistoryData]);

	return (
		<section className="world-info">
			<div className="container">
				<h1>World Coronavirus Statistics</h1>
				<h6>Search By country to see statistics of a country</h6>
				<div className="select-menu">
					<Selector entries={worldHistoryData} setCountry={setCountry} />
				</div>
				<div className="statistics">
					<div className="boxes">
						<StatBox boxFor="infected" count={countryData.infected} />
						<StatBox boxFor="active" count={countryData.active} />
						<StatBox boxFor="recoveries" count={countryData.recoveries} />
						<StatBox boxFor="deaths" count={countryData.deaths} />
					</div>
				</div>
				<div className="graph">
					<Graph data={countryData} />
				</div>
			</div>
		</section>
	);
};

export default World;
