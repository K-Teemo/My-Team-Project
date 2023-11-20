import express from 'express';
import {SERVER_PORT} from './constants/app.constant.js';
const app = express();
const port = 3000;

app.get('/', (req, res) : void => {
  res.send('Hello World!');
});

app.listen(port, () : void => {
  console.log(`Example app listening on port ${SERVER_PORT}`);
});