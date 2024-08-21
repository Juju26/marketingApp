import { useState } from 'react'
import './App.css'

import { Router,BrowserRouter,Routes,Route } from 'react-router-dom'
import BlogCard from './Components/BlogCard'
import TestimonialCard from './Components/TestimonialCard'
import ErrorPage from './Components/ErrorPage'
function App() {
  const AppTitle="marketingApp"
  return (
  <>
  <BrowserRouter>
   <Routes>
     <Route path='/marketingApp' element={<BlogCard/>} > </Route>
     <Route path='/marketingApp/blogCard' element={ <BlogCard/> }></Route>
     <Route path='/marketingApp/testimonialCard' element={<TestimonialCard/>} ></Route>
     <Route path='*' element={<ErrorPage/>}/>
   </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
