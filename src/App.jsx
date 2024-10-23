import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Company from './pages/Company'
import Blog from './pages/Blog'
import Faqs from './pages/Faqs'
import Login from './pages/Login'
import FreeConsultation from './pages/FreeConsultation'
import Bookkeeping from './pages/Bookkeeping'


import AOS from 'aos';
import 'aos/dist/aos.css'

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, [])

  function PageOutlet() {

    return (

      <div className="font-roboto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <PageOutlet />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/pricing',
          element: <Pricing />,
        },
        {
          path: '/company',
          element: <Company />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        
        {
          path: '/faqs',
          element: <Faqs />,
        },
        {
          path: 'https://dev.1tapbiz.com/login',
          element: <Login />,
        },
        {
          path: '/freeconsultation',
          element: <FreeConsultation />,
        },
        {
          path: '/blogs/:id',
          element: <Bookkeeping />
        }

      ],
      errorElement: (
        <>
          <Header />
          <Footer />
        </>
      ),
    }
  ]);

  return (
    <div>
      <Toaster />
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

