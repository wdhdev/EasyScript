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
  - The flip module is a module which flips a coin and returns `heads` or `tails`.
  - Example:
    ```js
    const { flip, print } = require("easyscriptjs");

    const result = flip();

    print(result);
    ```

### log
  - The log module lets you use a shortened version of `console.log` in Node.js.
  - Example:
    ```js
    const { log } = require("easyscriptjs");

    log("Hello World");
    ```

### print
  - The print module allows you to use `console.log` as if it was Python.
  - Example:
    ```js
    const { print } = require("easyscriptjs");

    print("Hello World");
    ```