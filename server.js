var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: "Climb Long's Peak",
  completed: false
}, {
  id: 2,
  description: 'Climb a 5.11b',
  completed: false
}, {
  id: 3,
  description: 'Sell a website',
  completed: false
}];

app.get('/', function(req, res) {
  res.send('Todo API Root');
});

app.get('/todos', function(req, res) {
  res.json(todos);
});

app.get('/todos/:id', function(req, res) {
  var matchedTodo;
  var todoId = parseInt(req.params.id, 10);
  todos.forEach((todo) => {
    if(todo.id === todoId) {
      matchedTodo = todo;
    }
  });

  if (matchedTodo) {
    res.json(matchedTodo);
  } else {
    res.status(404).send();
  }

});

app.listen(PORT, function() {
  console.log('Express listening on port ' + PORT);
});
