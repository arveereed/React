import { useParams, Link } from "react-router-dom";
import { useStoreState } from 'easy-peasy';

const BookDetails = () => {
  const { id } = useParams();
  const getBookById = useStoreState((state) => state.getBookById);
  const book = getBookById(id);

  return (
    <>
    {book &&
    <>
      <h2>Title</h2>
      <p>{book.title}</p>
      <h2>Author</h2>
      <p>{book.author}</p>
      <h2>Book Type</h2>
      <p>{book.type}</p>
      <h2>Description</h2>
      <p>{book.description}</p>
    </>
    }
    {!book &&
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

export default BookDetails;