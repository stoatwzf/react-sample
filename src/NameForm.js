import React from 'react';

class NameForm extends React.Component {
	state = {
		name: 'stoat',
		text: 'some text',
		select: 'se3'
	}

	changeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	submitHandler = event => {
		event.preventDefault();
		console.log(this.state);
	}

	render (){
		return (<form onSubmit={this.submitHandler}>
			<label>Name: </label>
			<input name="name" type="text" value={this.state.name} onChange={this.changeHandler} />
			<br/>
			<label>Text: </label>
			<textarea name="text" value={this.state.text} onChange={this.changeHandler} />
			<br/>
			<label>select: </label>
			<select name="select" value={this.state.select} onChange={this.changeHandler}>
				<option>se1</option>
				<option>se2</option>
				<option>se3</option>
				<option>se4</option>
			</select>
			<br/>
			<input type="submit" value="sub" />
		</form>);
	}
}

export default NameForm;