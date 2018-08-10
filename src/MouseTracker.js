import React, { Component } from 'react';
import a1 from '../public/a1.jpg'

class Cat extends Component {
	render (){
		const { x, y } = this.props.mouse;

		return (<img src={a1} style={{
			position: 'absolute',
			left: x,
			top: y
		}} />)  
	}
}
class Mouse extends Component {
	state = {
		x: 0,
		y: 0
	}

	mouseMoveHandler = event => {
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	}

	render (){
		return (<div style={{height: '5000px'}} onMouseMove={this.mouseMoveHandler}>
			{this.props.render(this.state)}
		</div>);
	}
}
class MouseTracker extends Component {
	render (){
		return (<div>
			<h1>Move the mouse around!</h1>
			<Mouse render={mouse => <Cat mouse={mouse} />} />
		</div>);
	}
};

export default MouseTracker;