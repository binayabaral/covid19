import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

const Header = () => {
	let resizeTimer;
	window.addEventListener('resize', () => {
		document.body.classList.add('resize-active');
		if (window.innerWidth > 767) {
			setNavActive(false);
		}
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			document.body.classList.remove('resize-active');
		}, 400);
	});

	const [navActive, setNavActive] = useState(false);

	const handleNavClick = () => {
		if (navActive) {
			setNavActive(false);
		} else {
			setNavActive(true);
		}
	};

	return (
		<header id="header" className={navActive ? 'nav-active' : ''}>
			<div className="container">
				<nav id="nav" className="header--nav">
					<a href="http://www.binayabaral.com.np" target="_blank" rel="noopener noreferrer" className="logo">
						<img src={logo} alt="binayabaral.com.np" />
					</a>
					<div className="nav-opener" onClick={handleNavClick}>
						<span></span>
					</div>
					<ul className="navigation-menu">
						<li>
							<Link to="/world" onClick={handleNavClick}>
								World
							</Link>
						</li>
						<li>
							<Link to="/" onClick={handleNavClick}>
								Nepal
							</Link>
						</li>
						<li>
							<Link to="news" onClick={handleNavClick}>
								Recent News
							</Link>
						</li>
						<li>
							<Link to="myths" onClick={handleNavClick}>
								Myths
							</Link>
						</li>
						<li>
							<Link to="faqs" onClick={handleNavClick}>
								FAQs
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
