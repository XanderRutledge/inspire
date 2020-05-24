import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Xander/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi.get()
      .then(res => {
        let newTodo = res.data.data.map(TodoData => new Todo(TodoData))
        store.commit('todos', newTodo)
      })
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(res => {
        this.getTodos()
      })
      .catch(err => console.error(err))

  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    console.log(todo)
    if (todo) {
      if (todo.completed == "false") {
        todo.completed = "true"
        todoApi.put(todoId, todo)
          .then(res => {
            console.log(res)
            this.getTodos()
          })
          .catch(err => console.error(err))
      }
      else {
        todo.completed = "false"
        todoApi.put(todoId, todo)
          .then(res => {
            console.log(res)
            this.getTodos()
          })
          .catch(err => console.error(err))
      }
    }


    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)


    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
      .then(res => {
        this.getTodos()
      })
      .catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
