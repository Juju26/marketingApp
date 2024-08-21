import { useState } from 'react'
import './App.css'

import { Router,BrowserRouter,Routes,Route } from 'react-router-dom'
import BlogCard from './Components/BlogCard'
import TestimonialCard from './Components/TestimonialCard'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
   <Routes>
     <Route path='/blogCard' element={ <BlogCard/> }></Route>
     <Route path='/testimonialCard' element={<TestimonialCard/>} ></Route>
   </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
