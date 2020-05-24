import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let lists = store.State.todos
  let template = ''
  lists.forEach(t => template += t.Template)
  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
      description: event.target.item.value,
    };
    event.target.reset()
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
