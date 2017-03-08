import '../styles/_twitch-alerts.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'mobx-react'

import Alerts from '../components/Alerts'
import store from '../stores/AlertsStore'

const app = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Alerts}/>
		</Router>
	 </Provider>,
	app
)
