import React from 'react';

class Welcome extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			date: Date.now()
		}
	}
	componentDidMount (){
		this.timerId = setInterval(() => {
			this.tick();
		}, 2000);
	}
	compoenentWillUnmount (){
		clearInterval(timerId);
	}
	tick () {
		this.setState({
			date: Date.now()
		})
	}
	render (){
		return <h1>{this.state.date}</h1>;
	}
}

export default Welcome;