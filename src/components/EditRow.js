import React from 'react';
import {Table,Button} from 'semantic-ui-react'

export default class EditRow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user:props.item.user,
			albumTitle:props.item.albumTitle,
			albumURL:props.item.albumURL
		}
	}

	onChange = (event) => {
		let state = {}
		state[event.target.name] = event.target.value
		this.setState(state);
	}
	
	editItem = (event) => {
		let item = {
			id:this.props.item.id,
			user:this.state.user,
			albumTitle:this.state.albumTitle,
			albumURL:this.state.albumURL
		}
		this.props.editItem(item);
	}

	render() {
		return(
			<Table.Row>
				<Table.Cell>
					<input type="text"
							name="user"
							required={true}
							value={this.state.user}
							onChange={this.onChange}/>
				</Table.Cell>
				<Table.Cell>
					<input type="text"
							name="albumTitle"
							required={true}
							value={this.state.albumTitle}
							onChange={this.onChange}/>
				</Table.Cell>
				<Table.Cell>
					<input type="url"
							name="albumURL"
							required={true}
							value={this.state.albumURL}
							onChange={this.onChange}/>
				</Table.Cell>
				<Table.Cell>
					<Button color="green"
							onClick={this.editItem}>Save</Button>
				</Table.Cell>
				<Table.Cell>
					<Button color="red"
							onClick={() => this.props.cancel()}>Cancel</Button>
				</Table.Cell>
			</Table.Row>
		)
	}
}




