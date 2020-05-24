import Image from "../models/image.js";
import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 15000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor() {
  }

  getImage() {
    imgApi.get()
      .then(res => {
        let image = new Image(res.data)
        store.commit("image", image)

      })
  }



}

const imageService = new ImageService();
export default imageService;
