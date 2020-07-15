import React from 'react';

const Faq = props => {
	return (
		<div className="faq">
			<span className="title question">Question:</span>
			<span className="txt">{props.nepali ? props.faq.question_np : props.faq.question}</span>
			<span className="title answer">Answer:</span>
			<span className="txt">{props.nepali ? props.faq.answer_np : props.faq.answer}</span>
		</div>
	);
};

export default Faq;
