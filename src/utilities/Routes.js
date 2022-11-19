import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Appointment from '../pages/Appointment/Appointment'
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
              },
              {
                path: '/appointment',
                element: <Appointment />
              }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routes