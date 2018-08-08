import React from 'react';
import PropTypes from 'prop-types';

const Repeat = props => {
	const arr = [];

	for (let i = 0; i < props.nums; i += 1){
		arr.push(props.children(i));
	}
	return arr;
}
class ChildFn extends React.Component {
	render (){
		return (<Repeat nums="10">
			{index => <div>hello {index}</div>}
		</Repeat>);
	}
};

Repeat.proptypes = {
	nums: PropTypes.array
}

export default ChildFn;