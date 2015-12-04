import { default as React, Component, Children, cloneElement } from 'react'

import assign from 'lodash.assign'
import kebabCase from 'lodash.kebabcase'

export default class Trackable extends Component {

	getChildContext() {
		return {
			tracking: assign({}, this.context.tracking, this.props)
		}
	}

	getTracking() {
		return assign({}, this.context.tracking, this.props)
	}

	getDataAttributes() {
		let trackingAttributes = this.getTracking()

		let dataAttributes = {}

		for( var key in trackingAttributes ) {
			if(key === 'children') continue
			dataAttributes['data-' + kebabCase(key)] = trackingAttributes[key]
		}

		return dataAttributes
	}

	getChild() {
		let baseChild = Children.only(this.props.children)
		if (baseChild.type.displayName === 'Trackable') return baseChild
		return cloneElement( baseChild, this.getDataAttributes() )
	}

	render() {
		return this.getChild()
	}
}

Trackable.contextTypes = {
	tracking: React.PropTypes.object
}

Trackable.childContextTypes = {
	tracking: React.PropTypes.object
}

Trackable.displayName = 'Trackable'