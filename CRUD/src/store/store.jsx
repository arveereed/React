import { createStore, action, thunk, computed } from "easy-peasy";

export default createStore({
  books: [],
  setBooks: action((state, payload) => {
    state.books = payload;
  })
});