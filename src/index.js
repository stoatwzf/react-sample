// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './NameForm';
import Welcome from './Welcome';
import ListItems from './ListItems';
import Calculator from './Calculator';
import Banner from './Banner';
import SignUpDialog from './SignUpDialog';
import FilterableProductTable from './FilterableProductTable';
import ChildFn from './ChildFn';
import Unform from './Unform';
import {themes, ThemeContext} from './makeContext';
import { TypeContext } from './typeContext';
import Toolbar from './Toolbar';

const Top = props => {
	return <h1>Top</h1>;
}
const Bottom = props => {
	return <h1>Bottom</h1>;
}
const Hello = props => {
	return [<h2 key="0">hello {props.a}</h2>, <h2 key="1">hello {props.b}</h2>];
}
const LiList = props => {
	return (<React.Fragment>
		<li>sad</li>
		<li>sad</li>
		<li>sad</li>
		<li>sad</li>
	</React.Fragment>)
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
		isToggle: false,
		theme: themes.light
	}

	toggleFn = a => {
		console.log(a)
		this.setState(prevState => ({
			isToggle: !prevState.isToggle
		}));
	}


	RefHandler = () => {
		console.log(1111)
		this.focusRef.focus();
	}

	toggleTheme = () => {
		this.setState(state => ({
			theme: state.theme === themes.dark ? themes.light : themes.dark
		}));
	}

	render (){
		const numbers = [1, 2, 3, 4, 5];
		const obj = { a: 1, b: 2};

		return (
			<ThemeContext.Provider value={this.state.theme}>
				<TypeContext.Provider value="hello context">
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
				<SignUpDialog />
				<FilterableProductTable RefHandler={this.RefHandler} inputRef={el => this.focusRef = el} />
				<ChildFn />
				<Hello {...obj}/>
				<Unform />
				*/}
				<Toolbar changeTheme={this.toggleTheme} />
				</TypeContext.Provider>
				<ul>
					<LiList />
				</ul>
			</ThemeContext.Provider>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);