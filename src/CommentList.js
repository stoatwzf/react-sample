import React from 'react';
import withSubscription from './withSubscription';

const commentData = {
	data: [{
		content: 'comment list 1'
	},{
		content: 'comment list 2'
	},{
		content: 'comment list 3'
	}]
}

@withSubscription(commentData)
class Comment extends React.Component {
	render (){
		const data = this.props.data.data;

		return (<ul>
				{data.map(num => <li>{num.content}</li>)}
		</ul>);
	}
}



export default Comment;