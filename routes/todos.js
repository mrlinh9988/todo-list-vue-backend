var express = require('express');
var router = express.Router();
const todoModel = require('../models/todo');

router.get('/', async (req, res, next) => {
  try {
    const allTodos = await todoModel.find();
    res.json({
      allTodos,
    });
  } catch (error) {
    res.json({ error });
  }
});

router.post('/', async (req, res, next) => {
  const { title } = req.body;
  try {
    const newTodo = await todoModel.create({ title });
    res.json({
      newTodo,
    });
  } catch (error) {
    res.json({ error });
  }
});

router.put('/:id', async (req, res, next) => {
  const update = {};
  const id = req.params.id;
  const { title } = req.body;
  if (title) {
    update.title = title;
  }
  try {
    await todoModel.updateOne({ _id: id }, update);
    res.json({
      message: 'Update success',
    });
  } catch (error) {
    res.json({ error });
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    await todoModel.deleteOne({ _id: id });
    res.json({
      message: 'Delete success',
    });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
