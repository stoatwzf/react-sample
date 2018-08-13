import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../public/index.css';

const Square = props => {
	return (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

class Board extends Component {
	renderSquare = index => {
		return (
			<Square 
				value={this.props.squares[index]}
				onClick={this.props.onClick.bind(this, index)}
			/>
		);
	}

	render (){
		return (<Fragment>
			<div className="board-row">
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
			</div>
			<div className="board-row">
				{this.renderSquare(3)}
				{this.renderSquare(4)}
				{this.renderSquare(5)}
			</div>
			<div className="board-row">
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</div>
		</Fragment>);
	}
}

class Game extends Component {
	state = {
		history: [{
			squares: Array(9).fill(null)
		}],
		xIsNext: true,
		stepNumber: 0,
	}

	calculateWinner = squares => {
		const lines = [
	    [0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6],
	  ];

	  for (let i = 0; i < lines.length; i++) {
	    const [a, b, c] = lines[i];
	    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	      return squares[a];
	    }
	  }
	  return null;
	}

	clickHandler = index => {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (this.calculateWinner(squares) || squares[index]){
			return;
		}
		squares[index] = this.state.xIsNext ? 'x' : '0';
		this.setState({
			history: history.concat({
				squares,
			}),
			xIsNext: !this.state.xIsNext,
			stepNumber: history.length
		});
	}

	junmpTo = step => {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 ? true : false
		})
	}

	render (){
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = this.calculateWinner(current.squares);
		const status = winner ? 
								`Winner: ${winner}` : 
								`Next player: ${this.state.xIsNext ? 'x' : '0'}`;
		const moves = history.map((step, move) => {
			const desc = move ? `Move # ${move}` : 'Game start';

			return (
				<li key={move}>
					<a href="#" onClick={() => this.junmpTo(move)}>
						{desc}
					</a>
				</li>
			);
		});

		return (<div className="game">
			<div className="game-board">
				<Board squares={current.squares} onClick={this.clickHandler}/>
			</div>
			<div className="game-info">
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>);
	}
}

ReactDOM.render(
	<Game />,
	document.querySelector('#root')
);