import { useEffect, useState } from 'react'
import moviesData from '@api/movies'
import reviewsData from '@api/reviews'
import { convertToTweet } from '@helpers'
const Index = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    setReviews(convertToTweet(moviesData, reviewsData))
  }, [])
  const downloadJson = () => {
    if (reviews?.length > 0) {
      let el = document.createElement('a')
      let file = new Blob([JSON.stringify(reviews, null, 2)], { type: 'application/json' })
      el.href = URL.createObjectURL(file)
      el.download = 'tests.json'
      el.click()
    }
  }
  return (
    <div className='row'>
      <div className='col-12 text-end my-2'>
        <div className='btn btn-sm btn-primary text-white' onClick={downloadJson}>
          <i className='las la-download me-1' />
          <span>Downlod JSON</span>
        </div>
      </div>
      {reviews?.map((m, index) => (
        <div key={index} className='col-12 my-2'>
          <div className='card'>
            <div className='card-body'>
              <p className='m-0 fw-bold fs-7'>{m}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Index
