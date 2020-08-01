import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
					<Link to="#" className="nav-opener" onClick={handleNavClick}>
						<span></span>
					</Link>
					<ul className="navigation-menu">
						<li>
							<NavLink to="/world" activeClassName="active" onClick={handleNavClick}>
								World
							</NavLink>
						</li>
						<li>
							<NavLink to="/" exact activeClassName="active" onClick={handleNavClick}>
								Nepal
							</NavLink>
						</li>
						<li>
							<NavLink to="/news" activeClassName="active" onClick={handleNavClick}>
								Recent News
							</NavLink>
						</li>
						<li>
							<NavLink to="/myths" activeClassName="active" onClick={handleNavClick}>
								Myths
							</NavLink>
						</li>
						<li>
							<NavLink to="/faqs" activeClassName="active" onClick={handleNavClick}>
								FAQs
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
