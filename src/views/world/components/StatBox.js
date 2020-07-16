import React from 'react';
import CountUp from 'react-countup';

const StatBox = ({ boxFor, count }) => {
	return (
		<div className={`stat-box ${boxFor}`}>
			<span className="box-for">{boxFor}</span>
			<CountUp className="count" start={0} end={count} duration={1} separator="," />
			<span>{`Total ${boxFor} ${boxFor === 'deaths' || boxFor === 'recoveries' ? 'from' : 'cases of'} COVID-19`}</span>
		</div>
	);
};

export default StatBox;
