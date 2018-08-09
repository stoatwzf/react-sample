import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
	clickHandler = event => {
		console.log('a2')
	}
	render (){
		return (<div>
			<h1>helo world</h1>
			{ReactDOM.createPortal(<a onClick={this.clickHandler}>a2</a>, this.props.pcon)}
		</div>);
	}
}
class Portal extends React.Component {
	state = {
		pcon: document.createElement('div')
	}

	rehandler = el => {
		this.setState({
			pcon: el
		})
	}

	clickHandler = event => {
		console.log('a3')
	}

	render (){
		return (<React.Fragment>
			<h2>Captial</h2>
			<div onClick={this.clickHandler}>
				<Modal pcon={this.state.pcon} />
			</div>
			<p ref={this.rehandler}>
				<a>a1</a>
			</p>
		</React.Fragment>);
	}
}

export default Portal;