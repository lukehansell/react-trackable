# react-trackable
We need to be able to support Google Tag Manager in our React components. We already have a [mixin](https://github.com/holidayextras/react-data-attributes-mixin) but we want to be able to do this in a more declarative manner. This component intends to fulfil that requirement.

It uses context to pass tracking parameters down to children of children. When you pass props to a Tracking component these are then added to the context which is passed down from that instance onwards.

The Trackable component adds the tracking data to it's immediate child via props in the form of `data-[tracking-name]={[tracking-value]}`.

## installation
`npm install --save react-trackable`

## usage
    let function ToBeTracked(props) {
        return <div {...props}>something cool</div>
    }

    const class Container extend Component {
        render() {
            <Trackable foo="bar">
                <ToBeTracked />
            </Trackable>
        }
    }

    ReactDOM.render(<Container />, document.body)

This will output:

`<div data-foo="bar">something cool</div>`

Because a parent component cannot affect what is rendered in a child you must provide a spread for the props in your child component in order to render the data attributes onto the elements.

A Trackable component expects one child, this is so that it does not have to render any containing `div`. Make sure all children are therefore wrapped in an appropriate container.

## test
`npm test`

## development
`npm start`
`open http://localhost:3000`