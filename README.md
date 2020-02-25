# `@elunic/is-iso-date`

[![Build Status](https://travis-ci.org/elunic/node-is-iso-date.svg?branch=master)](https://travis-ci.org/elunic/node-is-iso-date)

Written in TypeScript!

## Table of Contents

- [`@elunic/is-iso-date`](#elunicis-iso-date)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Functionality](#functionality)
  - [License](#license)


## Installation

```bash
$ npm install @elunic/is-iso-date
```


## Functionality

```typescript

import { isoDateRegExp, isISODate, InvalidISODateError, assertISODate } from '@elunic/is-iso-date';

'2020-02-20T10:00:00Z'.match(isoDateRegExp); // OK
isISODate('2020-02-20T10:00:00Z'); // true

try {
  assertISODate('2020');
} catch (err) {
  err instanceof InvalidISODateError; // true
}

// With Joi:
Joi.string().custom(assertISODate);

// NOTE: Do not use together with Joi's .isoDate(). That will always
// produce an ISO string, but one where the timezone has been transformed.
```

## License

MIT License

Copyright (c) 2020 elunic AG/William Hefter <wh@elunic.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
