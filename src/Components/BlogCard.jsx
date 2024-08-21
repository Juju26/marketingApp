import React from 'react'
import '../assets/css/blogCard.css'
import blogCoverImg from '../assets/imgs/spacejoy-YqFz7UMm8qE-unsplash.jpg' 

function BlogCard() {
  return (
  <>
  <div className='blogCard'>
    <div className="card-container">
     <div className="card-flex">
      <div className="card">
        <div className="coverImage">
           <img src={blogCoverImg} alt="Img here" />
         </div>
         <div className="cardDetails">
           <p className="catagory">Interior</p>
           <h3 className="title">Top 5 Living Room Inspirations</h3>
           <p className="description">Curated vibrants colors for your living, make it pop & calm in the same time.</p>
           <div className="CTA">
           <a className="cta-button" href="">Read More </a> <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
             <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
           </svg>
         </div>
        </div>
    </div>
    </div>
    </div>
     {/* <!-- Interior
       Top 5 Living Room Inspirations
       Curated vibrants colors for your living, make it pop & calm in the same time.
       Read more --> */}
 
     {/* <!-- Attribute this challenge to yourself! --> */}
     <div className="credits" data-gfe-screenshot-exclude="true">
       A challenge by
       <a
         href="https://www.greatfrontend.com/projects?ref=challenges"
         target="_blank"
         >GreatFrontEnd Projects</a
       >. Built by
       <a
         href="https://www.greatfrontend.com/projects/u/username"
         target="_blank"
         >Juju</a
       >.
     </div>
     </div>
     </>
 
  )
}

export default BlogCard