import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='blog' element={<Blog/>} />
    </Route>
  )
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
