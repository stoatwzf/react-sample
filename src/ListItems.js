import React from 'react';

export default props => {
	const numbers = props.numbers;
	const list = numbers.map((number, key) =>
	  <li key={key}>{number}</li>
	);

	return (
		<ul>
			{list}
		</ul>
	)
}