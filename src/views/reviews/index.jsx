import { useEffect, useState } from 'react'
import reviewsData from '@api/reviews'
import { truncateChar as truncate } from '@helpers'
const Index = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    setReviews(reviewsData)
  }, [])
  return (
    <div className='row'>
      {reviews?.map(({ title, review, score }, index) => (
        <div key={index} className='col-md-4 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <p className='mt-0 mb-2 fw-bold fs-7'>
                {truncate(title, 25)} ({score})
              </p>
              <p className='mt-0 mb-2 fs-7'>{truncate(review, 25)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Index
