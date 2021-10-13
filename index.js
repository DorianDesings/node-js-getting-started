// require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.json());

app.post('/test', (req, res) => {
  console.log(req);
  res.status(200).send();
});

app.get('/test', (req, res) => {
  console.log(req);
  res.status(200).send();
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
