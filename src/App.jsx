import { useState } from 'react'
import './App.css'

import { Router,BrowserRouter,Routes,Route } from 'react-router-dom'
import BlogCard from './Components/BlogCard'
import TestimonialCard from './Components/TestimonialCard'
import ErrorPage from './Components/ErrorPage'
import ProfileCard from './Components/ProfileCard'
function App() {
  const AppTitle="marketingApp"
  return (
  <>
  {/* <BrowserRouter>
   <Routes>
     <Route path='/marketingApp' element={<BlogCard/>} > </Route>
    <Route path='/marketingApp/blogCard' element={ <BlogCard/> }></Route>
     <Route path='/marketingApp/testimonialCard' element={<TestimonialCard/>} ></Route>
     <Route path='/marketingApp/profileCard' element={<ProfileCard/>} ></Route>
     <Route path='*' element={<ErrorPage/>}/>
   </Routes>
   </BrowserRouter> */}
   <ProfileCard/>
  </>
  )
}

export default App
