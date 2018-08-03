import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
const BoilingVerdict = props => {
	return <p>{props.celsius >= 100 ? 'yes' : 'no'}</p>
};
class TemperatureInput extends React.Component {
	changeHandler = event => {
		this.props.onTemperatureChange(event.target.value);
	}

	render (){
		const { scale, temperature } = this.props;

		return (<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}</legend>
			<input type="text" value={temperature} onChange={this.changeHandler} />
		</fieldset>);
	}
}
class Calculator extends React.Component {
	state = {
		temperature: 0,
		scale: 'c'
	}

	toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9

	toFahrenheit = celsius => (celsius * 9 / 5) + 32

	changeHandler = (scale, temperature) => {
		this.setState({
			temperature,
			scale
		});
	}

	render (){
		const { scale, temperature } = this.state;
		const celsius = scale === 'c' ? temperature : this.toCelsius(temperature);
		const fahrenheit = scale === 'f' ? temperature : this.toFahrenheit(temperature);

		return (<div>
			<TemperatureInput temperature={celsius} onTemperatureChange={this.changeHandler.bind(this, 'c')} scale="c" />
			<TemperatureInput temperature={fahrenheit} onTemperatureChange={this.changeHandler.bind(this, 'f')} scale="f" />
			<BoilingVerdict celsius={celsius} />
		</div>);
	}
}

export default Calculator;