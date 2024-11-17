import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Navigation from './Navigation.jsx'
import {Home} from './Home.jsx'
import Booking from './Booking.jsx'
import Confirmation from './Confirmation.jsx'
import { SpeedInsights } from '@vercel/speed-insights/react';

// import Clock from './Clock'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
    children: [
      {
        index:true,
        element: <Home/> 
      },
      {
        path: "booking",
        element:<Booking/>,
      },
      {
        path:"booking/confirmation",
        element:<Confirmation/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes}/>
    <SpeedInsights />
    {/* <Clock/> */}
  </React.StrictMode>,
)
