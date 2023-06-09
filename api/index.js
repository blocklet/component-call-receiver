const express = require('express');
const bodyParser = require('body-parser');
const { component } = require('@blocklet/sdk/lib/middlewares');

const app = express();

const port = process.env.BLOCKLET_PORT || process.env.PORT || 3030;

app.use(bodyParser.json({ limit: '4mb' }));

app.post('/api/internal/data', component.verifySig, async (req, res) => {
  res.json({ msg: 'pong from "Component Call Receiver"' });
});

app.get('/', (req, res) => {
  res.send(`
<div style="display:flex;flex-direction:column;align-items:center;padding:64px 0;">
<h1 style="margin:64px 0;">
  <span style="display:inline-block;padding:8px 24px;background:#1dc1c7;color:#fff;">Component Call Receiver</span>
</h1>
<div>
<div style="font-size: 18px;">
This blocklet acts as receiver for testing component.call
<br />
The sender should do this:
</div>
<pre>
<code>
const { Component } = require('@blocklet/sdk');

const { data } = await Component.call({
  name: 'z2qa5KQyqGsQSDkuEW8Do25caboQbAXt4aWS7',
  path: '/api/internal/data',
  data: 'test',
});
</code>
</pre>
</div>
</div>
  `);
});

app.listen(port, () => {
  console.log(`Blocklet app listening on port ${port}`);
});
