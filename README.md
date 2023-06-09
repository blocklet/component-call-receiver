This blocklet acts as receiver for testing component.call

the sander should do this:

```js
const { Component } = require('@blocklet/sdk');

const { data } = await Component.call({
  name: 'z2qa5KQyqGsQSDkuEW8Do25caboQbAXt4aWS7',
  path: '/api/internal/data',
  data: 'test',
});
```
