import { useParams } from "react-router-dom";
import { useStoreState } from 'easy-peasy';

const BookDetails = () => {
  const { id } = useParams();
  const getBookById = useStoreState((state) => state.getBookById);
  const book = getBookById(id);

  return (
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
  )
}

export default BookDetails;