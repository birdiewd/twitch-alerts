import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'

@observer
export default class Follower extends Component {
	render() {
		return (
			<li className="followers-list--item" key={this.key}>
				<div className="followers-list--item--text">
					{this.props.follower.name}
				</div>
			</li>
		);
	}
}
