'use strict'

import React from 'react'
import { render } from 'react-dom'

import Playground from 'component-playground'

import Trackable from '../src/trackable'

import componentExample from 'raw!./examples/component.example'

const OutputComponent = React.createClass({
	render() {
		return(
			<div>
				<h1>Props Passed to Child Component</h1>
				<pre>{JSON.stringify(this.props, null, 2)}</pre>
			</div>
		)
	}
})

var Index = () => {
	return (
		<div className="component-documentation">
			<Playground codeText={componentExample} scope={{
				React: React, 
				Trackable: Trackable, 
				OutputComponent: OutputComponent
			}} />
		</div>
	)
}

render(<Index />, document.getElementById('container'))
