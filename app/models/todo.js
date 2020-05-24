export default class Todo {
    constructor(data) {
        this.id = data._id || data.id
        this.description = data.description || "N/A"
        this.completed = data.completed || "false"
    }

    get Template() {

        return /*html*/`
<h3>${this.subTemplate} ${this.description}	<button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-primary ml-1">-</button></form><h3>
    `}

    get subTemplate() {
        let template = ""
        if (this.completed == true) {
            template += /*html*/`
<input checked type="checkbox" id="completed" value="true" onclick="app.todoController.toggleTodoStatus('${this.id}')"> 
`}
        else {
            template += /*html*/`
<input type="checkbox" id="completed" value="true" onclick="app.todoController.toggleTodoStatus('${this.id}')"> 
`}
        return template
    }
}



