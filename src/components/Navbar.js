import React from 'react';
import {Link} from 'react-router-dom';
import {List,Header} from 'semantic-ui-react';

export default class Navbar extends React.Component {

	render() {
		let style = {
			height:70,
			backgroundColor:"lightblue"
		}
	
	return (
		<div style={style}>
			<List>
				<List.Item><Link to="/">Users albums</Link></List.Item>
				<List.Item><Link to="/form">Create user - Add albums</Link></List.Item>
			</List>
		</div>
	)
	}
}