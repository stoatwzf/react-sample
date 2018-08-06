import React from 'react';

const FancyBorder = props => {
	return (<div className={`FancyBorder FancyBorder-${props.color}`}>
		{props.children}
	</div>);
};
const Dialog = props => {
	return (<FancyBorder color="blue">
		<h1 className="Dialog-title">
			{props.title}
		</h1>
		<p className="Dialog-message">
			{props.message}
		</p>
		{props.children}
	</FancyBorder>);
};
class SignUpDialog extends React.Component {
	state = {
		login: ''
	}

	handleChange = event => {
		this.setState({
			login: event.target.value
		});
	}

	handleSignUp = event => {
		alert(`Welcome aboard, ${this.state.login}`);
	}

	render (){
		return (<Dialog title="Mars Exploration Program" message="How should we refer to you?">
			<input value={this.state.login} onChange={this.handleChange} />
			<input type="submit" value="Sign Me Up" onClick={this.handleSignUp} />
		</Dialog>);
	}
}

export default SignUpDialog;