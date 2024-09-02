const AddBook = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-element my-4">
        <input type="text" className="form-control" name='title' placeholder="Book Title: "/>
      </div>
      <div className="form-element my-4">
        <input type="text" className="form-control" name='author' placeholder="Author Name: "/>
      </div>
      <div className="form-element my-4">
        <select name="type" className="form-control">
          <option value="">Select Book Type</option>
          <option value="adventure">Adventure</option>
          <option value="fantasy">Fantasy</option>
          <option value="scifi">Sci-Fi</option>
          <option value="horror">Horror</option>
        </select>
      </div>
      <div className="form-element my-4">
        <input type="text" className="form-control" name="description" placeholder='Book Description:'/>
      </div>
      <div className="form-element">
        <button className="btn btn-success">Add Book</button>
      </div>
    </form>
  )
}

export default AddBook;