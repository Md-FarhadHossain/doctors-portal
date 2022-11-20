import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Appointment from '../pages/Appointment/Appointment'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
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
              },
              {
                path: '/signup',
                element: <Signup />
              },
              {
                path: '/login',
                element: <Login />
              }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routes