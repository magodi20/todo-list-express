const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


class Task {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this._id = Math.floor(Math.random() * 100)
    }

    get id(){
      return this._id
    }
};

const tasks = [{name: "study", description: "programming", id: 55}, 
{name: "exercice", description: "fausto", id: 87}]

app.get("/", (req, res) => {
  res.json(tasks)
})


app.get("/:id", (req, res) => {
  // TODO: Implement get task by id, wit error if task is not found. 
  console.log(req.params.id)
  const foundId = tasks.find(element =>
    element.id === req.params.id)
 
  res.json(foundId)
  })
app.post('/', (req, res) => {
  const t = new Task(req.body.name, req.body.description)
  tasks.push(t)
  //Implement proper response (Succesfully created, and id ) 
  console.log(t)
})
// Implement delete (by id in path)  functionality
app.delete('/:id', (req, res) => {
  const element = req.body.id
 });

app.listen(3000, () => {
    console.log(`Express listening on port 3000`)
})