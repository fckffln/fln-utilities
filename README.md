# Welcome

fln utilities is a JS/TS library for simple life in your code :)

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-packages-locally) to install fln.

```bash
npm install fln-utilities
```

## Example usage

### Typescript
```typescript
import {defineType} from "fln-utilities";

defineType('word');
// returns 'string'

defineType([0,3,5]);
// returns 'array'

defineType({'foo' : 'bar'});
// returns 'object'

class fln {};
defineType(new fln());
// returns 'class'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/isc/)
