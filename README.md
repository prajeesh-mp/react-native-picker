Android/iOS Compatible Dropdown

![React Native Picker](https://i.ibb.co/0XdD9fn/IMG-1619-portrait.png)

![React Native Picker](https://i.ibb.co/zX8DPC6/ezgif-4-431f2dae8a.gif)

## Installation

```sh

npm install rn-simple-picker

```

## Usage

```js

import Picker from  'rn-simple-picker';

<Picker
	items={[
		{
			label: "One",
			value: 1,
			// "random": "data"
		},
		{
			label: "Two",
			value: 2,
			// "random": "data"
		}
	]}
	onSelect={(item) => this.handleSelect(item)}
	selectedItem={{ label: "One", value: 1 }} // User already selected item
	{/* Optional params */}
	// placeHolder="Choose Your Number"
	// containerStyles={{ borderWidth: 2, borderColor: "blue" }}
	// inputStyle={{ textAlign: "center" }}
	// iconStyle={{ width: 45, height: 45 }}
/>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
