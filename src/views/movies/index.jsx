import { useEffect, useState } from 'react'
import moviesData from '@api/movies'
import img from '@images/cinema.svg'
import { truncateChar as truncate } from '@helpers'
const Index = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    setMovies(moviesData?.filter(({ year }) => year))
  }, [])
  return (
    <div className='row'>
      {movies?.map(({ title, year }, index) => (
        <div key={index} className='col-md-4 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <p className='mt-0 mb-2 fw-bold fs-7'>
                {truncate(title, 25)} ({year})
              </p>
              <img src={img} className='w-100 opacity-25' alt='img' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Index
