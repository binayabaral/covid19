import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/main.scss';

import Header from './layout/Header';
import Footer from './layout/Footer';

import World from './views/world';
import Nepal from './views/nepal';
import RecentNews from './views/news';
import Myths from './views/myths';
import Faqs from './views/faqs';

import NewsArticlesProvider from './contexts/NewsContext';
import MythArticlesProvider from './contexts/MythsContext';
import FaqsArticlesProvider from './contexts/FaqsContext';

function App() {
	return (
		<FaqsArticlesProvider>
			<MythArticlesProvider>
				<NewsArticlesProvider>
					<Router>
						<Header />
						<Switch>
							<Route path="/" exact component={Nepal} />
							<Route path="/world" component={World} />
							<Route path="/news" component={RecentNews} />
							<Route path="/myths" component={Myths} />
							<Route path="/faqs" component={Faqs} />
						</Switch>
						<Footer />
					</Router>
				</NewsArticlesProvider>
			</MythArticlesProvider>
		</FaqsArticlesProvider>
	);
}

export default App;