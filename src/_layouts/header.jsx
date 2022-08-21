import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
    <Navbar bg='light' expand='lg' sticky='top' className='border-bottom'>
      <div className='container py-2'>
        <div className='d-flex me-auto'>
          <Link to='/' className='fs-7 text-primary m-0 fw-normal pointer me-3'>
            <i className='las la-home me-1' />
            <span className=''>Home</span>
          </Link>
          <Link to='/tweet' className='fs-7 text-primary m-0 fw-normal pointer me-3'>
            <i className='lab la-twitter me-1' />
            <span className=''>Tweet</span>
          </Link>
          <Link to='/movies' className='fs-7 text-primary m-0 fw-normal pointer me-3'>
            <i className='las la-film me-1' />
            <span className=''>Movies</span>
          </Link>
          <Link to='/reviews' className='fs-7 text-primary m-0 fw-normal pointer me-3'>
            <i className='las la-comments me-1' />
            <span className=''>Reviews</span>
          </Link>
        </div>
      </div>
    </Navbar>
  )
}

export default Index
