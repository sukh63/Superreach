import React from 'react'
import Arrow from "../Assets/Group 10.png"
import Facebook from "../Assets/Facebook.png";
import Linkedin from "../Assets/LinkedIn New.png"
import twitter from "../Assets/Twitter.png";
import Line from "../Assets/Rectangle 454.png"
const Footer = () => {
  return (
    <>
   <section className='footer'>
   <div className='container'>
   <div className='row p-5'>
   <div className='col-lg-6 col-md-6 col-10 p-5 mt-5'>
   <h1 className='footerhead'>Go Futher</h1>
   <h1 className='footerhead'>Go Faster</h1>
   <h6 className='footerhead2'>Unlocking recruiters and sales reps full potential</h6>
   <button className='btn getstartedbtn3'>Get Started</button>

 
   </div>
   <div className='col-lg-6 col-md-6 p-5 mt-5'>
   <img src={Arrow} alt="arrow"/>
   </div>
   
   </div>
   <div className='row p-2'>
   <div className='col-lg-4 col-md-2 col-2 mt-2'>
   <div className='row p-3'>
   <div className='col-lg-2'><img src={Facebook} alt="fb"/></div>
   <div className='col-lg-2'><img src={Linkedin} alt="fb"/></div>
   <div className='col-lg-2'><img src={twitter} alt="fb"/></div>
   </div>
   </div>
   <div className='col-lg-8 col-md-10 col-10'>
  <div className='row'>
  <div className='col-lg-3'>
  <h1 className=' listheads mb-3' >Explore</h1>
  <p className='listpara'>Our Story</p>
  <p className='listpara'>Meet the team
  </p>
  <p className='listpara'>Join the team
  </p>
  <p className='listpara'>Refeeral program</p>
  </div>
  <div className='col-lg-3'>

  <p className='listpara mt-4'>Blogs</p>
  <p className='listpara'>Press
  </p>
  <p className='listpara'>Contact
  </p>

  </div>
  <div className='col-lg-3'>
  <h1 className=' listheads mb-3' >Features</h1>
  <p className='listpara'>Outreach</p>
  <p className='listpara'>Learning Platform
  </p>
  <p className='listpara'>Ai Role Play
  </p>
  <p className='listpara'>Reporting & Analytics</p>
  </div>
  <div className='col-lg-3'>
  <h1 className=' listheads mb-3' >Resources</h1>
  <p className='listpara'>Help Desk</p>
  <p className='listpara'>Faqs
  </p>
  <p className='listpara'>Videos/Webinar's
  </p>
  
  </div>
  </div>
 
   </div>
  
   </div>
   <div className='row mt-5'>
   <div className='col-lg-6 col-md-6 col-10 mb-5'>
   <h1 className='copirighthead'>Copyright @ 2022. SuperReach. All Rights Reserved.</h1>
   </div>
<div className='col-lg-2 col-md-2 col-2'></div>
   <div className='col-lg-4 col-md-4 col-10 mb-5'>
   <div className='row'>
   <div className='col-lg-4'>   <h1 className='copirighthead'>Terms Of Service</h1></div>
   <div className='col-lg-4'>   <h1 className='copirighthead'>Privacy Policy</h1></div>
   <div className='col-lg-4'>   <h1 className='copirighthead'>Usage Policy</h1></div>
   </div>

   </div>
   </div>
   
   </div>
   <img src={Line} alt="line"/>
   </section>

    </>
  )
}

export default Footer