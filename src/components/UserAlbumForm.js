import React from 'react';
import {Form,Button} from 'semantic-ui-react';

export default class UserAlbumForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id:"1",
			name:"",
			username:"",
			email:"",
			address: {
				street:"",
				suite:"",
				city:"",
				zipcode:"",
				geo: {
				  lat:"",
				  lng:""
				}
			},
            phone:"1",
			website:"",
			company: {
				name: "",
				catchPhrase: "",
				bs: ""
			  },
			albumTitle:"",
			albumURL:""
		}
	}
	
	onChange = (event) => {
		let state = {}
		state[event.target.name] = event.target.value
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let item = {
			id:this.state.id,
			name:this.state.name,
			username:this.state.username,
			email:this.state.email,
// TODO
			address:this.state.address,
			  street:this.state.street,
			  suite:this.state.suite,
			  city:this.state.city,
			  zipcode:this.state.zipcode,
			  geo:this.state.geo,
			    lat:this.state.lat,
				lng:this.state.lng,
// TODO
			phone:this.state.phone,
			website:this.state.website,
// TODO
			company:this.state.company,
			  name:this.state.name,
			  catchPhrase:this.state.catchPhrase,
              bs:this.state.bs,
// TODO
			albumTitle:this.state.albumTitle,
			albumURL:this.state.albumURL
		}
		this.props.addToList(item);
		this.setState({
			id:"1",
			name:"",
			username:"",
			email:"",
			address:"",

			phone:"1",
            webside:"",
			company:"",

			albumTitle:"",
			albumURL:""
		})
	}
	
	render() {
		let style ={
			width:600,
			margin:"auto"
		}
		return(
			<div style={style}>
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label htmlFor="type">Name:</label>
					<input type="text"
							name="name"
							required={true}
							onChange={this.onChange}
							value={this.state.user}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="type">Username:</label>
					<input type="text"
							name="username"
							required={true}
							onChange={this.onChange}
							value={this.state.user}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="type">Email:</label>
					<input type="text"
							name="email"
							required={true}
							onChange={this.onChange}
							value={this.state.user}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="type">Address:</label>
					<input type="text"
							name="address"
							required={true}
							onChange={this.onChange}
							value={this.state.user}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="type">Phone:</label>
					<input type="text"
							name="phone"
							required={true}
							onChange={this.onChange}
							value={this.state.user}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="type">Website:</label>
					<input type="url"
							name="website"
							required={true}
							onChange={this.onChange}
							value={this.state.user}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="type">Company:</label>
					<input type="text"
							name="company"
							required={true}
							onChange={this.onChange}
							value={this.state.user}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="albumTitle">Album title:</label>
					<input type="text"
							name="albumTitle"
							required={true}
							onChange={this.onChange}
							value={this.state.albumTitle}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="albumTitle">Album URL:</label>
					<input type="url"
							name="albumURL"
							required={true}
							onChange={this.onChange}
							value={this.state.albumURL}/>
				</Form.Field>
				<Button type="submit">Add</Button>
			</Form>
			</div>
		)
	}
	
}