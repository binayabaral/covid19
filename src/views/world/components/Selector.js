import React from 'react';

const Selector = props => {
	const handleChange = e => {
		props.setCountry(e.target.value);
	};

	return (
		<select id="country-selector" onChange={handleChange}>
			{props.entries.map(entry => (
				<option key={entry.country}>{entry.country}</option>
			))}
		</select>
	);
};

export default Selector;
