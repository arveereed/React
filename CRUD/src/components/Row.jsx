const Row = ({ book }) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.type}</td>
      <td>
        <button className="btn btn-info">Read more</button>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  )
}

export default Row;