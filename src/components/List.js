import React from 'react';
import { Link } from 'react-router-dom';

const List = props => (
	<div>
	<ul>
		<li>
			some product compile 1.
			<Link to="/list/1">detail</Link>
		</li>
		<li>
			some product compile 2.
			<Link replace={true} to="/detail/2">detail</Link>
		</li>
		<li>
			some product compile 3.
			<Link to="/detail/3">detail</Link>
		</li>
	</ul>
	
	</div>	
);

export default List;