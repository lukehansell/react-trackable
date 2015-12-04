import assert from 'assert'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Simulate } from 'react-addons-test-utils'

import Trackable from '../src/trackable'

describe('Trackable', function() {

	let node, rendered

	beforeEach((done) => {
		node = document.createElement('div')
		document.body.appendChild(node)

		const testComponents = (
			<Trackable foo="bar" abc="qux">
				<Trackable foo="baz">
					<div id="nestedDiv" {...this.props} />
				</Trackable>
			</Trackable>
		)

		render(testComponents, node, () => {
			rendered = node.querySelector('#nestedDiv')
			done()
		})
	})

	afterEach(() => {
		unmountComponentAtNode(node)
		document.body.removeChild(node)
	})

	it('passes attributes via context to children', function() {
		assert(rendered.getAttribute('data-abc') === 'qux')
	});

	it('overrides attributes with ones further down the chain', function() {
		assert(rendered.getAttribute('data-foo') === 'baz')
	});
})