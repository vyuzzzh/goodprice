import express from 'express';

const Product = require('../models/product');
const Shops = require('../models/shops');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.status(200);
  res.send(products);
});

router.get('/products/:id', async (req, res) => {
  const shops = await Shops.find({ product_id: req.params.id });
  res.status(200);
  res.send(shops);
});


export default router;