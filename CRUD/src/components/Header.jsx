import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className='d-flex justify-content-between my-4'>
        {pathname === "/" && 
        <>
        <h1>Book list</h1>
        <div>
          <Link to="/addbook"><button className="btn btn-primary">Add Book</button></Link>
        </div>
        </>
        }
        {pathname === "/addbook" && 
        <>
        <h1>Add New Book</h1>
        <div>
          <Link to="/"><button className="btn btn-primary">Back</button></Link>
        </div>
        </>
        }
        {pathname.includes('edit') && 
        <>
        <h1>Edit Book</h1>
        <div>
          <Link to="/"><button className="btn btn-primary">Back</button></Link>
        </div>
        </>
        }
        {pathname.includes('readmore') && 
        <>
        <h1>Book Details</h1>
        <div>
          <Link to="/"><button className="btn btn-primary">Back</button></Link>
        </div>
        </>
        }
    </header>
  )
}

export default Header;