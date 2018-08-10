import React from 'react';

const withSubscription = data => {
	return Target => {
		class SubScr extends React.Component {
			state = {
				data: data
			}

			render (){
				return <Target ref={this.props.forwardedRef} data={this.state.data} {...this.props} />;
			}
		}

		return React.forwardRef((props, ref) => {
			return <SubScr forwardedRef={ref} {...props} />
		});
	}
}

export default withSubscription;