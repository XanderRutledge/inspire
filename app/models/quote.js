export default class Quote {
    constructor(data) {
        this.body = data.body
        this.author = data.author
    }

    get Template() {
        return /*html*/`

	<h3 class="show py-5">"${this.body}"</h3>
    <h4 class="hide">-${this.author}</h4>

    `
    }




}
