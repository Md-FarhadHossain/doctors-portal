import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routes