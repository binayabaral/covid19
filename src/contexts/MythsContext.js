import React, { createContext, useState, useEffect } from 'react';

import getMyths from '../api/Myths';

export const MythArticles = createContext();

const MythArticlesProvider = props => {
	const [myths, setMyths] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const myths = await getMyths();
			setMyths(myths);
		};
		fetchArticles();
	}, []);

	return <MythArticles.Provider value={myths}>{props.children}</MythArticles.Provider>;
};

export default MythArticlesProvider;
