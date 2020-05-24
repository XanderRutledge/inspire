import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  constructor() {

  }


  getQuote() {
    _quoteApi.get()
      .then(res => {
        let quote = new Quote(res.data.quote)
        store.commit("quote", quote)
      })



  }
}





const quoteService = new QuoteService();
export default quoteService;
