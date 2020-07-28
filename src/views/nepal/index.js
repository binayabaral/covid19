import React, { useContext } from 'react';
import { NepalData } from '../../contexts/NepalDataContext';

import Selector from './components/Selector';
import StatBox from '../../common-components/StatBox';
import Graph from '../../common-components/Graph';

const Nepal = () => {
	const nepalData = useContext(NepalData);
	return (
		<section className="nepal-info">
			<div className="container">
				<h1>Coronavirus Statistics for Nepal</h1>
				<h6>Search By Province, District and Municipality</h6>
				<div className="region-selectors">
					<Selector choices={nepalData.provinceList} changeHandler={nepalData.setSelectedProvince} setSelectedDistrict={nepalData.setSelectedDistrict} setSelectedMunicipality={nepalData.setSelectedMunicipality} />
					<Selector choices={nepalData.districtList} changeHandler={nepalData.setSelectedDistrict} setSelectedMunicipality={nepalData.setSelectedMunicipality} />
					<Selector choices={nepalData.municipalityList} changeHandler={nepalData.setSelectedMunicipality} />
				</div>
				<div className="statistics">
					<div className="boxes">
						<StatBox boxFor="infected" count={nepalData.regionData.infected} />
						<StatBox boxFor="active" count={nepalData.regionData.active} />
						<StatBox boxFor="recoveries" count={nepalData.regionData.recoveries} />
						<StatBox boxFor="deaths" count={nepalData.regionData.deaths} />
					</div>
				</div>
				<div className="graph">
					<Graph data={nepalData.regionData} />
				</div>
			</div>
		</section>
	);
};

export default Nepal;
