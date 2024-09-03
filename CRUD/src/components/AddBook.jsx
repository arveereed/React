import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { format } from 'date-fns';

const AddBook = () => {
  const navigate = useNavigate();
  const books = useStoreState((state) => state.books);

  const bookTitle = useStoreState((state) => state.bookTitle);
  const authorName = useStoreState((state) => state.authorName);
  const bookType = useStoreState((state) => state.bookType);
  const bookDesc = useStoreState((state) => state.bookDesc);

  const addBook = useStoreActions((actions) => actions.addBook);
  const setBookTitle = useStoreActions((actions) => actions.setBookTitle);
  const setAuthorName = useStoreActions((actions) => actions.setAuthorName);
  const setBookType = useStoreActions((actions) => actions.setBookType);
  const setBookDesc = useStoreActions((actions) => actions.setBookDesc);

  useEffect(() => {
    setBookTitle('');
    setAuthorName('');
    setBookType('');
    setBookDesc('');
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = books.length
      ? String(Number(books[books.length - 1].id) + 1) : "1";
    const datetime = format(new Date(), "MMM dd, yyyy pp");
    const newBook = {
      id, 
      title: bookTitle,
      author: authorName,
      type: bookType,
      description: bookDesc,
      datetime
    }
    addBook(newBook);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-element my-4">
        <input 
          type="text" 
          className="form-control" 
          name='title' 
          placeholder="Book Title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
      </div>
      <div className="form-element my-4">
        <input 
          type="text" 
          className="form-control" 
          name='author' 
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </div>
      <div className="form-element my-4">
        <select 
          name="type" 
          className="form-control"
          value={bookType}
          onChange={(e) => setBookType(e.target.value)}
        >
          <option value="">Select Book Type</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Scifi">Sci-Fi</option>
          <option value="Horror">Horror</option>
        </select>
      </div>
      <div className="form-element my-4">
        <input 
          type="text" 
          className="form-control" 
          name="description" 
          placeholder='Book Description'
          value={bookDesc}
          onChange={(e) => setBookDesc(e.target.value)}
        />
      </div>
      <div className="form-element">
        <button className="btn btn-success">Add Book</button>
      </div>
    </form>
  )
}

export default AddBook;