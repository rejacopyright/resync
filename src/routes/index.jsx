import { lazy, createElement } from 'react'

const routes = [
  {
    path: '/*',
    element: createElement(lazy(() => import('@layouts'))),
    children: [
      { index: true, element: createElement(lazy(() => import('@views/tweet'))) },
      {
        path: 'tweet',
        index: true,
        element: createElement(lazy(() => import('@views/tweet'))),
      },
      {
        path: 'movies',
        index: true,
        element: createElement(lazy(() => import('@views/movies'))),
      },
      {
        path: 'reviews',
        index: true,
        element: createElement(lazy(() => import('@views/reviews'))),
      },
      // 404
      {
        path: '*',
        index: true,
        element: createElement(lazy(() => import('@layouts/pageNotFound'))),
      },
    ],
  },
]

export default routes
