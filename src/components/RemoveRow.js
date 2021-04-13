import React from 'react';
import {Table,Button} from 'semantic-ui-react'

export default class RemoveRow extends React.Component {

	
	render() {
		return (
			<Table.Row>
				<Table.Cell>{this.props.item.user}</Table.Cell>
				<Table.Cell>{this.props.item.albumTitle}</Table.Cell>
				<Table.Cell>{this.props.item.albumURL}</Table.Cell>
				<Table.Cell><Button color="red" 
							name={this.props.item.id}
							onClick={() => this.props.cancel()}
							>Cancel</Button></Table.Cell>
				<Table.Cell><Button color="green"
							name={this.props.item.id}
							onClick={() => this.props.removeFromList(this.props.item.id)}
							>Confirm</Button></Table.Cell>
			</Table.Row>
		)
	}				
}