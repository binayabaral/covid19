import React from 'react';

const Myth = props => {
	return (
		<div className="myth">
			<span className="myth--title">Myth</span>
			<span className="txt">{props.myth.myth}</span>
			<span className="reality--title">Reality</span>
			<span className="txt">{props.myth.reality}</span>
		</div>
	);
};

export default Myth;
