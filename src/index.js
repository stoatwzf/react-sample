import React from 'react';
import ReactDOM from 'react-dom';

// const Welcome = props => <h1>welcome {props.name}</h1>;
class Welcome extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			date: Date.now()
		}
	}
	componentDidMount (){
		this.timerId = setInterval(() => {
			console.log(1)
			this.tick();
		}, 2000);
	}
	compoenentWillUnmount (){
		console.log(3)
		clearInterval(timerId);
	}
	tick (){
		this.setState({
			date: Date.now()
		})
	}
	render (){
		return <h1>{this.state.date}</h1>;
	}
}
const App = props => {
	return (
		<div>
			<Welcome name="tom" />
			<Welcome name="stoat" />
			<Welcome name="wzf" />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);