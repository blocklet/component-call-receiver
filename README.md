## Launch on Blocklet Server

[![Launch on Blocklet Server](https://assets.arcblock.io/icons/launch_on_blocklet_server.svg)](https://install.arcblock.io/launch?action=blocklet-install&meta_url=https%3A%2F%2Fgithub.com%2Fblocklet%2Fcomponent-call-receiver%2Freleases%2Fdownload%2Fv1.0.2%2Fblocklet.json)

This blocklet acts as receiver for testing component.call

the sender should do this:

```js
const { Component } = require('@blocklet/sdk');

const { data } = await Component.call({
  name: 'z2qa5KQyqGsQSDkuEW8Do25caboQbAXt4aWS7',
  path: '/api/internal/data',
  data: 'test',
});
```
