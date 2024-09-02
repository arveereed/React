import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div>
      this is not exist
    <Link to="/"><button className='btn btn-danger'>Back</button></Link>
    </div>
  )
}

export default Missing;