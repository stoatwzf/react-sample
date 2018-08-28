import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import Pay from './components/Pay';
import '../public/index.css';


class App extends Component {
	payHandler = props => {
		console.log(props);
		return <Pay />
	}

	abcHandler = match => {
		if (match){
			return <h2>abc</h2>
		}
		return null;
	}

	render (){
		return (
			<BrowserRouter>
				<div>
					<div className="navList">
						<NavLink exact to="/list">list</NavLink><br />
						<NavLink to="/detail/123">detail</NavLink><br />
						<NavLink to="/pay">pay</NavLink><br />
					</div>



					<Route  path="/list" component={List} />
					<Route path="/list/:id" component={Detail} />
					<Route path="/pay" children={({ match }) => this.abcHandler(match)} />
				</div>
			</BrowserRouter>
		);
	}
}

render(<App />, document.querySelector('#root'));