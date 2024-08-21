import React from 'react'
import profileThumb from '../assets/imgs/profile-thumbnail.png'
import '../assets/css/testimonialCard.css'

function TestimonialCard() {
  return (
    <>
    <div className='testimonialCard'>
    <div class="card-container">
      <div class="card">
         <div class="card-flex">
        <img class="card-pic" src={profileThumb} alt="profile pic" />
          <div class="card-userName">
            <p class="card-userPrimaryName">Sarah Dole</p>
            <p class="card-userHandle">@sarahdole</p>
            
          </div></div>
           <p class="card-userAbout"> I've been searching for high-quality abstract images for my design projects, 
            and I'm thrilled to have found this platform. The variety and depth of creativity are astounding! 
        </p>

      </div>
    </div>

    <div class="credits" data-gfe-screenshot-exclude="true">
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

export default TestimonialCard