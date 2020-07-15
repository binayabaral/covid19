import React from 'react';

const NewsArticle = props => {
	return (
		<article className="article">
			<a href={props.article.url} target="_blank" rel="noopener noreferrer" className="article--image" style={{ backgroundImage: `url("${props.article.image_url}` }}>
				{props.article.title}
			</a>
			<div className="article--txt">
				<span className="article--source">
					<a href={`http://www.${props.article.source}`} target="_blank" rel="noopener noreferrer">
						{props.article.source}
					</a>
				</span>
				<span className="article--title">
					<a href={props.article.url} target="_blank" rel="noopener noreferrer">
						{props.article.title}
					</a>
				</span>
				<p className="article--summary">{props.article.summary}</p>
			</div>
		</article>
	);
};

export default NewsArticle;
