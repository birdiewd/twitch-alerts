import React, {Component} from 'react'
import { computed, observable } from 'mobx'

import axios from 'axios'

const ajax = axios.create({
	baseURL: 'http://birdiewd.com/twitch-alerts-api/'
})

export class AlertsStore {
	@observable alerts = { follows: [] }

	constructor(){
		this.pollAgain()

		this.followerlength = 0
	}

	@computed get followers() {
		return this.alerts.follows.reverse()
	}

	pollAgain() {
		let length = this.followerlength % 150;
		ajax.get(`/poll/${length}`).then(alerts => {
			this.alerts = alerts.data

			this.followerlength += 1
		}).catch(err => {
			console.log(err)
		})

		setTimeout(this.pollAgain.bind(this), 3500)
	}
}

export default new AlertsStore
