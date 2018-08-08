import React from 'react';
import { ThemeContext } from './makeContext';
import { TypeContext } from './typeContext';

const ThemedButton = props => {
	return (<TypeContext.Consumer>
		{type =>(<ThemeContext.Consumer>
			{theme => (<button {...props} style={{backgroundColor: theme.background}}>{type}</button>)}
		</ThemeContext.Consumer>)}
	</TypeContext.Consumer>);
};
const Toolbar = props => {
	return (<ThemedButton onClick={props.changeTheme}>
		Cahnge Theme
	</ThemedButton>);
}

export default Toolbar;