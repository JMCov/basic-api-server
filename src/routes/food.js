'use strict';

const express = require('express');

const { foodModel } = require('../models');


const router = express.Router();

router.get('/food', async (req, res, next) => {
  const food = await foodModel.findAll();
  res.status(200).send(food);
});

router.post('/food', async (req, res, next) => {
  try {
    console.log(req.body);
    const newFood = await foodModel.create(req.body);
    res.status(200).send(newFood);
  } catch (err) {
    next(err);
  }
});

//IS IT THOUGH
router.get('/food/:id', async (req, res, next) => {
  const id = req.params.id;
  const food = await foodModel.findByPk(id);
  res.status(200).send(food);
});
//IS IT THOUGH

router.put('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedFood = await foodModel.update(id, req.body);
    res.status(200).send(updatedFood);
  } catch (err) {
    next(err);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await foodModel.delete(id);
    res.status(200).send('Deleted');
  } catch (err) {
    next(err);
  }
});


module.exports = router;