import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserAlbumForm from './components/UserAlbumForm'
import UserAlbumList from './components/UserAlbumList'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import {Switch,Route,withRouter} from 'react-router-dom'
//import                                                            TODO <- get users data from reduxsauce  

// TODO: make paths:
// - Sijoita käyttäjälistaus polkuun: /users
// - Sijoita käyttäjän näkymä polkuun: /users/:userId
// - Sijoita käyttäjän albumilistaus polkuun: /users/:userId/albums

class App extends React.Component {
	
	constructor(props) {
		super(props)
		console.log(props)
		this.state = {
			list:[],
			id:100
		}
	}

// tilanhallinta tulisi toteuttaa reduxsauce ja tämä app pitää simppelinä johon muut komponentit tuodaan

	setUsersList = (item) => {
		item.id = this.state.id;
		let tempList = this.state.list.concat(item);
		let tempId = this.state.id+1;
		this.setState({
			list:tempList,
			id:tempId
		})
		this.props.history.push("/users")
	}
	
	addToList = (item) => {
		item.id = this.state.id;
		let tempList = this.state.list.concat(item);
		let tempId = this.state.id+1;
		this.setState({
			list:tempList,
			id:tempId
		})
		this.props.history.push("/users")                          // was just /
	}
	
	removeFromList = (id) => {
		let tempId = parseInt(id,10);
		let tempList = this.state.list.filter(item => item.id !== tempId)
		this.setState({
			list:tempList
		})
	}
// for luuppien käsittely sekavaa. eikös vain.	
	editItem = (item) => {
		let tempList = [];
		for(let i=0;i<this.state.list.length;i++) {
			if(this.state.list[i].id !== item.id) {
				tempList.push(this.state.list[i]);
			} else {
				tempList.push(item);
			}
		}
		this.setState({
			list:tempList
		})
	}
	
	render() {
		return (
			<div className="App">
				<Navbar/>
				<hr/>
				<Header />
				<hr/>
				<Switch>
					<Route exact path="/users" render={                              // added users
						() => <UserAlbumList list={this.state.list} 
							  removeFromList={this.removeFromList}
							  editItem={this.editItem}/>
					}/>
					<Route path="/form" render={
					() => <UserAlbumForm addToList={this.addToList}/>
					}/>
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
