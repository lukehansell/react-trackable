import React from 'react'
import { render } from 'react-dom'

import Trackable from '../src/trackable'

var Component = React.createClass({
	render: function() {
		return (
			<div {...this.props} dataCrazy="coconut">Hello {this.props.name}</div>
		)
	}
})

var Container = React.createClass({
	render: function() {
		return (
			<Trackable foo="bar" qux="abc">
				<Trackable foo="baz">
					<Component name="Jimmy" />
				</Trackable>
			</Trackable>
		)
	}
})

render(<Container />, document.getElementById('container'))
