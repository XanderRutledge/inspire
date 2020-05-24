export default class Image {
    constructor(data) {
        this.imgUrl = data.large_url || "https://wallpapercave.com/wp/KUy8J3z.jpg"
        this.date = new Date()
    }

    get Template() {
        return /*html*/`
        <img class="center-fit" src="${this.imgUrl}">
    
    `
    }




}