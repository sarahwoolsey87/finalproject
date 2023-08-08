const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

//Connect to MongoDB & CL
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error.message);
});

const PORT = process.env.PORT || 8091;

const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo/new", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save(); 

  res.json(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);

  if (!result) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json({ message: "Todo deleted successfully" });
});

app.put("/todo/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.complete = !todo.complete;

  todo.save();

  res.json(todo);

})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
