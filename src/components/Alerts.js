import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import Follower from './Follower'

@inject('store')
@observer
export default class Alerts extends Component {
	constructor() {
		super()

		this.handleCreateKeypress = this.handleCreateKeypress.bind(this)
		this.handleFilterChange = this.handleFilterChange.bind(this)
	}

	handleCreateKeypress(event) {
		if (event.which === 13) { // enter key
			this.props.store.createTodo(event.target.value) // add todo
			event.target.value = '' // clear todo text
		}
	}

	handleFilterChange(event) {
		this.props.store.filter = event.target.value
	}

	render() {
		const { followers } = this.props.store

		const followersList = followers.map(follower => (<Follower key={follower.id} follower={follower} />))

		return (
			<div>
				<h1>Followers</h1>

				<ul className="followers-list">{followersList}</ul>
			</div>
		);
	}
}
