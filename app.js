import express from 'express';
import {SERVER_PORT} from './constants/app.constant.js';
import db from './models/index.cjs';
const port = 3000;

const {Products, Users} = db;

const products = await Products.findAll();
const users = await Users.findAll();

console.log({
  products: products.map((products) => products.toJson()),
  users: users.map((user) => user.toJson()),
});

improt {apiRouter} from './routers/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.listen(port, ()  => {
  console.log(`Example app listening on port ${SERVER_PORT}`);
});