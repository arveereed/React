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
      {isLoading && (<h1>Loading Books...</h1>)}
      {!isLoading && fetchError && (
        <strong className="text-danger">{fetchError}</strong>
      )}
      {!isLoading && !fetchError 
        && (
          books.length 
        ? (
          books.map(book => <Row key={book.id} book={book}/>) 
        )
        : (
        <p>No Books to display.</p>
        )
        )
      }
    </tbody>
  </table>
  )
}

export default Home;