import { useStoreState } from "easy-peasy";
import Row from "./Row";

const Home = () => {
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
      </tr>
    </thead>
    <tbody>
      {books.map(book => <Row key={book.id} book={book}/>)}
    </tbody>
  </table>
  )
}

export default Home;