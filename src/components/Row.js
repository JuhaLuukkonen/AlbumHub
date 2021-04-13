import React from 'react';
import {Table,Button} from 'semantic-ui-react'

export default class Row extends React.Component {
	
	render() {
		return (
			<Table.Row>
				<Table.Cell>{this.props.item.user}</Table.Cell>
				<Table.Cell>{this.props.item.albumTitle}</Table.Cell>
				<Table.Cell>{this.props.item.albumURL}</Table.Cell>
				<Table.Cell><Button name={this.props.item.id}
				onClick={() => this.props.changeToRemoveMode(this.props.item.id)}>
				Remove</Button></Table.Cell>
				<Table.Cell><Button name={this.props.item.id}
				onClick={() => this.props.changeToEditMode(this.props.item.id)}>
				Edit</Button></Table.Cell>
			</Table.Row>
		)
	}				
}