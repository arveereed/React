import { Link } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

const Row = ({ book }) => {
  const deleteBook = useStoreActions((actions) => actions.deleteBook);

  const handleDelete = (id) => {
    deleteBook(id);
  }

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.type}</td>
      <td>
        <Link to={`/readmore/${book.id}`}><button className="btn btn-info m-2">Read more</button></Link>
        <Link to={`/edit/${book.id}`}><button className="btn btn-warning me-2">Edit</button></Link>
        <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button>
      </td>
      <td>{book.datetime}</td>
    </tr>
  )
}

export default Row;