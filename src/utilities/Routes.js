import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Main from './Main'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
              {
                path: '/',
                element: <Home />
              }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routes