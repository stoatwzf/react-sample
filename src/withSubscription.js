import React from 'react';

const withSubscription = data => {
	return Target => {
		return class extends React.Component {
			state = {
				data: data
			}

			render (){
				return <Target data={this.state.data} {...this.props} />
			}
		}
	}
}

export default withSubscription;