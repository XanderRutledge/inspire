import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
    let image = store.State.image
    document.getElementById("image").innerHTML = image.Template
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
    constructor() {
        store.subscribe("image", _drawImage);
        ImageService.getImage();
    }

}
