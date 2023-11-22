import express from 'express';
import {SERVER_PORT} from './constants/app.constant.js';
import db from './modelsindex.cjs';

const app = express();

const {Products, Users} = db;
const products = await products.findAll();
const users = await Users.findAll();

app.listen(port, ()  => {
  console.log(`Example app listening on port ${SERVER_PORT}`);
});