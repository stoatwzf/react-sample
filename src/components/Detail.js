import React from 'react';
import { Link } from 'react-router-dom';

const Detail = ({ match }) => (
	<div>
		<h1>product captial</h1>
		<p>a text for {match.params.id}</p>
		<Link to="/pay">pay</Link>
	</div>
);

export default Detail;