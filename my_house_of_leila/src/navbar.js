import { useRef } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import './index.css';
import logo from './images/logo.png';


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		  <header>
		  	<h3><img src={logo} alt="Logo" className="logo" style={{ width: '100px', height: 'auto' }} /></h3>
		  	<nav ref={navRef}>
		  		<a href="/#"><Link to="/">Home</Link></a>
		  		<a href="/services"><Link to="/services">Our services</Link></a>
		  		<a href="/gallery"><Link to="/gallery">Gallery</Link></a>
		  		<a href="/contact"><Link to="/contact">Contact us</Link></a>
		  		<button className="nav-btn nav-close-btn" onClick={showNavbar}>
		  			<FaTimes />
		  		</button>
		  	</nav>
		  	<button className="nav-btn" onClick={showNavbar}>
		  		<FaBars />
		  	</button>
		  </header>
	);
}

export default Navbar;