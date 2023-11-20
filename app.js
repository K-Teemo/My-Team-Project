import express from 'express';
import {SERVER_PORT} from './constants/app.constant.js';
const app = express();
const port = 3000;

app.get(path:'/', (req, res) : void => {
  res.send(body:'Hello World!');
});

app.listen(port, () : void => {
  console.log(message : `Example app listening on port ${SERVER_PORT}`);
});