'use strict';

const express = require('express');

const { clothesModel } = require('../models');


const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const clothes = await clothesModel.findAll();
  res.status(200).send(clothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    console.log(req.body);
    const newClothes = await clothesModel.create(req.body);
    res.status(200).send(newClothes);
  } catch (err) {
    next(err);
  }
});

//IS IT THOUGH
router.get('/clothes/:id', async (req, res, next) => {
  const id = req.params.id;
  const clothes = await clothesModel.findById(id);
  res.status(200).send(clothes);
});
//IS IT THOUGH

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedClothes = await clothesModel.update(id, req.body);
    res.status(200).send(updatedClothes);
  } catch (err) {
    next(err);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await clothesModel.delete(id);
    res.status(200).send('Deleted');
  } catch (err) {
    next(err);
  }
});


module.exports = router;