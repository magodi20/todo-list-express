const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


class Task {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.id = Math.floor(Math.random() * 100)
    }

    
};

const tasks = [{name: "study", description: "programming", id: 55}, 
{name: "exercice", description: "fausto", id: 87}]

app.get("/", (req, res) => {
  res.json(tasks)
})


app.get("/:id", (req, res) => {
  // TODO: Implement get task by id, wit error if task is not found. 
  const foundId = tasks.find(element => {
  element.id == req.params.id 
  })
  
  if (!foundId) {
    res.status(404).json({message: "Task was not found"})
  }

  res.json(foundId)
  

  })
app.post('/', (req, res) => {
  const t = new Task(req.body.name, req.body.description)
  tasks.push(t)
  //Implement proper response (Succesfully created, and id ) 
 
 res.json("Succesfully created task with new id:" + tasks[tasks.length - 1].id)
 
})
// Implement delete (by id in path)  functionality
app.delete('/:id', (req, res) => {
  idDelete = req.params.id
  for( let i = 0; i < tasks.length; i++) {
    if ( tasks[i].id == idDelete) {
      tasks.splice(i, 1)
      res.json({message: `The ${idDelete} was deleted`})
    } else {
      res.status(404).json({message: "Task was not found to be deleted"})
    }
   }
  
   
 });

app.listen(3000, () => {
    console.log(`Express listening on port 3000`)
})