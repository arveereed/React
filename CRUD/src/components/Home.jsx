import { useStoreState } from "easy-peasy";
import Row from "./Row";

const Home = ({ fetchError, isLoading }) => {
  const books = useStoreState((state) => state.books);

  return (
  <table className='table table-bordered'>
    <thead>
      <tr>
        <th>id#</th>
        <th>Title</th>
        <th>Author</th>
        <th>Type</th>
        <th>Action</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {isLoading && (
        <tr>
          <td><strong>Loading books....</strong></td>
        </tr>
      )}
      {!isLoading && fetchError && (
        <tr>
          <td><strong className="text-danger">{fetchError}</strong></td>
        </tr>
      )}
      {!isLoading && !fetchError 
        && (
          books.length 
        ? (
          books.map(book => <Row key={book.id} book={book}/>) 
        )
        : (
          <tr>
            <td>No Books to display.</td>
          </tr>
        )
        )
      }
    </tbody>
  </table>
  )
}

export default Home;