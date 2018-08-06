import React from 'react';

class Banner extends React.Component {
	render (){
		return (<div>
			{this.props.top}
			<h1>Middle</h1>
			{this.props.bottom}
		</div>);
	}
}

export default Banner;