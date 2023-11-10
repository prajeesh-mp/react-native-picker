
# react-native-picker

  

Android/iOS Compatible Dropdown

  

## Installation

  

```sh

npm install react-native-picker

```

  

## Usage

  

```js

import { Picker } from  'react-native-picker';

<Picker  
	items={[
		{
			label: "One",
			value: 1
		},
		{
			label: "Two",
			value: 2
		}
	]}
	onSelect={(item) => this.handleSelect(item)}
	selected={{ label: "One", value: 1 }} // User already selected item
/>

```

  

## Contributing

  

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

  

## License

  

MIT