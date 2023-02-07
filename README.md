# random-chars
A simple and lightweight npm package for generating random strings. Perfect for creating unique identifiers, passwords, and other random text. With customizable length and character set options, it's easy to generate strings that fit your specific requirements.

## Install

```bash
npm i @mo.inkhan/random-chars
```

## Usage

```ts
const randomChars = require('@mo.inkhan/random-chars')

randomChars({length: 12,prefix: 'id_',charset: '1234567890'})
```

## License

[MIT](LICENSE)