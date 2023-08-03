const express = require('express');
const mongoose = require('mongoose');
const Task = require('./T');
const app = express();

mongoose
  .connect('mongodb://localhost:27017/perf')
  .then(() => console.log('dataBase is connected'))
  .catch((err) => console.log(err));

app.use(express.json());

//route

const port = 5005;

app.post('/add', async (req, res) => {
  try {
    console.time(req.body.index);
    await Task.findOne();

    await Task.create({
      description: req.body.description,
    });
    console.timeEnd(req.body.index);
    res.json();
  } catch (error) {
    // console.log(error);
    res.status(500).json();
  }
});

app.get('/', async (req, res) => {
  try {
    const total = await Task.count();

    res.json({
      total,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json();
  }
});

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
