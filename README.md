<p align="center">
  <img src="https://easyscriptjs.github.io/images/cover.png">
</p>

<h1 align="center">Easy Script</h1>
<p align="center">Easy Script is a npm package which makes coding in JavaScript easy!</p>

## Usage
Using Easy Script is very easy to do.

1. Install the package using the following command:

```bash
npm install easyscriptjs
```

2. Import the modules you require.
    - You can find a list of all the modules [here](#modules).

```js
// List all of the modules you want to use in the brackets
// Example: { log, print }
const { print } = require("easyscriptjs");
```

3. Use it!

```js
const { print } = require("easyscriptjs");

print("Hello World");
```

## Modules

### flip
The flip module is a module which flips a coin and returns `heads` or `tails`.

**Example**

```js
// Import module
const { flip } = require("easyscriptjs");

// Generate a result
const result = flip();

// Log result to console
console.log(result);
```

### log
The log module lets you use a shortened version of `console.log` in Node.js. It also supports variables as well.

**Examples**

- With text:
```js
// Import module
const { log } = require("easyscriptjs");

// Logs text to console
log("Hello World");
```

- With a variable:
```js
// Import module
const { log } = require("easyscriptjs");

// Text to be logged
const text = "Hello World";

// Logs the "text" variable to console
log(text);
```

### print
The print module allows you to use `console.log` as if it was Python. It also supports variables as well.

**Examples**

- With text:
```js
// Import module
const { print } = require("easyscriptjs");

// Logs the text to console
print("Hello World");
```

- With a variable:
```js
// Import module
const { print } = require("easyscriptjs");

// Text to be logged
const text = "Hello World";

// Logs the "text" variable to console
print(text);
```

### random
The random module allows you to generate a random number. By default the highest number is `100`, but you can change that by specifying a number in the function. The highest number supported is `2,147,483,647` as that is the 32-bit integer limit.

**Examples**

- Without input:
```js
// Import module
const { random } = require("easyscriptjs");

// Generates a result from 1-100
const result = random();

// Generates a random number from 1 to 100 (the default)
console.log(result);
```

- Example with input:
```js
// Import module
const { random } = require("easyscriptjs");

// Generates a random number from 1 to 30
const result = random(30);

// Logs the result to console
console.log(result);
```
