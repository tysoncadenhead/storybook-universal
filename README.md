# Storybook Universal Boilerplate

Making a component library that can share components between native and web can be tricky. This opinionated boilerplate sets out to make that easier. Just clone this repo and start scaffolding components that you'll be able to use on React Web or React Native. This boilerplate uses typescript and styled components, so the exact flavor may not be for everyone, but hopefully it's instructive of how to structure a component library that can be run anywhere.

## Scaffolding Components

This boilerplate assumes that you are building components using [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) principles, so all scaffolded components will be an atom, molecule, organism or template. In my experience, this is the best way to seperate components in a React component library. To scaffold a new component, just run:

`npm run scaffold`

and you will be prompted for the type and name of the component.

## Building Typescript

`npm run compile`

or

`npm run watch`

to watch the Typescript files. You'll want to keep watching the files in the background while you run this on the web or native.

## Running on Web

`npm run web`

and then navigate to http://localhost:6006/

## Running on Native

`npm run native`

and then scan the UPC code to run it on your device.