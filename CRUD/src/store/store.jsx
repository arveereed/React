import { createStore, action, thunk, computed } from "easy-peasy";
import api from "../api/books";

export default createStore({
  books: [],
  setBooks: action((state, payload) => {
    state.books = payload;
  }),
  bookTitle: "",
  setBookTitle: action((state, payload) => {
    state.bookTitle = payload;
  }),
  authorName: "",
  setAuthorName: action((state, payload) => {
    state.authorName = payload;
  }),
  bookType: "",
  setBookType: action((state, payload) => {
    state.bookType = payload;
  }),
  bookDesc: "",
  setBookDesc: action((state, payload) => {
    state.bookDesc = payload;
  }),
  bookCount: computed((state) => state.books.length),
  getBookById: computed((state) => {
    return (id) => state.books.find((book) => (book.id).toString() === id);
  }),
  addBook: thunk(async (actions, newBook, helpers) => {
    const { books } = helpers.getState();
    try {
      const response = await api.post('/booklist', newBook)
      actions.setBooks([...books, response.data]);
      actions.setBookTitle('');
      actions.setAuthorName('');
      actions.setBookType('');
      actions.setBookDesc('');
    } catch (err) {
      console.log(err.message);
    }
  })
});