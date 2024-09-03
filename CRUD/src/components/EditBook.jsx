import { useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from "easy-peasy";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const getBookById = useStoreState((state) => state.getBookById);
  const book = getBookById(id);

  const bookTitle = useStoreState((state) => state.bookTitle);
  const authorName = useStoreState((state) => state.authorName);
  const bookType = useStoreState((state) => state.bookType);
  const bookDesc = useStoreState((state) => state.bookDesc);

  const editBook = useStoreActions((actions) => actions.editBook);
  const setBookTitle = useStoreActions((actions) => actions.setBookTitle);
  const setAuthorName = useStoreActions((actions) => actions.setAuthorName);
  const setBookType = useStoreActions((actions) => actions.setBookType);
  const setBookDesc = useStoreActions((actions) => actions.setBookDesc);

  useEffect(() => {
    if (book) {
      setBookTitle(book.title);
      setAuthorName(book.author);
      setBookType(book.type);
      setBookDesc(book.description);
      console.log(book);
    }
  }, [book]);

  const handleEdit = (id) => {
    const updatedBook = {
      id,
      title: bookTitle,
      author: authorName,
      type: bookType,
      description: bookDesc
    }

    editBook(updatedBook);
    navigate('/');
  }

  return (
    <>
    {bookTitle && 
    <form onSubmit={(e) => e.preventDefault()}>
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
      <button type='button' className="btn btn-success" onClick={() => handleEdit(book.id)}>Save</button>
    </div>
  </form>
    }
    {!bookTitle &&
    <>
      <h2>Book Not Found</h2>
      <p>Well, that's disappointing.</p>
      <p>
        <Link to="/">Visit our Homepage</Link>
      </p>
    </>
    }
    </>
  )
}

export default EditBook;