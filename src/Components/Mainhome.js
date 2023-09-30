import React from 'react'
import "./Compo.css"
import Navbar from './Navbar'
import Talktome from "../Assets/talktome.png"
const Mainhome = () => {
  return (
    <>
    <section className='mainbackground'>
    <Navbar/>
    <div className='container-fluid'>
    <div className='row justify-content-center'>
    <div className='col-lg-6  col-md-6 col'>
    <h1 className='mainhead'>Do you want to close more deals</h1>
    <p className='mainpara'>Recruiters and Sales reps; hitting targets and closing deals can be stressful and hard work. Our Ai makes it easier.</p>
    </div>
    <div className='col-lg-1'></div>
    <div className='col-lg-5 col-md-5 col' id='aidiv'>
    
    <img src={Talktome}  alt="support" />
    <div className='row justify-content-center'>
    <div className='col-lg-8 col-md-8 col-10'>
    <div className='row justify-content-center' id='transform'>
    <div className='col-lg-3'>
    <button className='btn btnno'>No</button>

    </div>
    <div className='col-lg-3'>
    <button className='btn btnyes'>Yes</button>

    </div>
    <div className='col-lg-3'></div>
    </div>
    </div>
   
    
    </div>
    
    </div>
  
    </div>
    
    
    </div>

    
    </section>
    </>
  )
}

export default Mainhome