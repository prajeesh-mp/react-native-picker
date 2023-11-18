**Android/iOS Compatible Dropdown**

<img src="https://i.ibb.co/0XdD9fn/IMG-1619-portrait.png" width="440px" />
<img src="https://i.ibb.co/zX8DPC6/ezgif-4-431f2dae8a.gif" width="400px" />

## Installation

```sh

npm install rn-simple-picker

```

## Usage

```js
import Picker from 'rn-simple-picker';

<Picker
  items={[
    {
      label: 'One',
      value: 1,
      // "random": "data"
    },
    {
      label: 'Two',
      value: 2,
      // "random": "data"
    },
  ]}
  onSelect={(item) => this.handleSelect(item)}
  selectedItem={{ label: 'One', value: 1 }} // User already selected item - optional
  placeHolder="Choose Your Number" // optional
  containerStyles={{ borderWidth: 2, borderColor: 'blue' }} // optional
  inputStyle={{ textAlign: 'center' }} // optional
  iconStyle={{ width: 45, height: 45 }} // optional
/>;
```

## License

MIT
