import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './NameForm';
import Welcome from './Welcome';
import ListItems from './ListItems';
import Calculator from './Calculator';
import Banner from './Banner';
import SignUpDialog from './SignUpDialog';
import FilterableProductTable from './FilterableProductTable';

const Top = props => {
	return <h1>Top</h1>;
}
const Bottom = props => {
	return <h1>Bottom</h1>;
}
class Diaolog extends React.Component {
	render (){
		return (<div>
			<p>----------------------------------------</p>
			{this.props.children}
			<p>----------------------------------------</p>
		</div>);
	}
}
class App extends React.Component {
	state = {
		isToggle: false
	}

	toggleFn = a => {
		console.log(a)
		this.setState(prevState => ({
			isToggle: !prevState.isToggle
		}));
	}

	render (){
		const numbers = [1, 2, 3, 4, 5];

		return (
			<div>
				{/*<Welcome name="tom" />
				<Welcome name="stoat" />
				<Welcome name="wzf" />
				<button onClick={e => this.toggleFn('hello')}>{this.state.isToggle ? 'OFF': 'ON'}</button>
				{this.state.isToggle && <h2>btn is on</h2>}
				{this.state.isToggle ? <h2>btn is on</h2> : ''}
				<ListItems numbers={numbers} />
				<ul>
					{numbers.map((num, key) => <li key={key}>{num}</li>)}
				</ul>
				<NameForm />
				<Calculator />
				<Diaolog>
					<h1>captial</h1>
					<h2>author</h2>
				</Diaolog>
				<Banner top={<Top />} bottom={<Bottom />} />
				<SignUpDialog />*/}
				<FilterableProductTable />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);