import React from 'react';
import { Link } from 'react-router-dom';


const Home = props => (
	<div>
		<Link to="/list">list</Link><br />
		<Link to="/detail/123">detail</Link><br />
		<Link to="/pay">pay</Link><br />
	</div>
);

export default Home;