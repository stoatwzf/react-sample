import React from 'react';

class Unform extends React.Component {

	submitHandler = event => {
		event.preventDefault();
		console.log(this.nameval.value);
		console.log(this.fileval.files[0].name);
	}

	render (){
		return (<form onSubmit={this.submitHandler} >
				<label>Name:</label>
				<input defaultValue="stoat" ref={element => this.nameval = element} name="name" />
				<br />
				<input type="file" ref={element => this.fileval = element} name="file" />
				<br />
				<input type="submit" value="sub" />
			</form>);
	}
}

export default Unform;