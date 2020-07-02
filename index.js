const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: true }));


class Task {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this._id = Math.floor(Math.random() * 100)
    }
};

const tasks = []

app.get("/", (req, res) => {
  res.json(tasks)
})


app.get("/:name", (req, res) => {
  const foundtask = req.params.name
  res.send(foundtask)
})

app.post('/tasks', (req, res) => {
  const t = new Task(req.body.name, req.body.description)
  tasks.push(t)
  res.send(t)
  console.log(req.body.name)
})


app.listen(3000, () => {
    console.log(`Express listening on port 3000`)
})