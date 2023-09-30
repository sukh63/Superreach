import React from 'react'
import Logo1 from "../Assets/Logo1.png"
import Logo2 from "../Assets/Logo2.png"
import Logo3 from "../Assets/Logo3.png"
import Logo4 from "../Assets/Logo4.png"
import Logo5 from "../Assets/Logo5.png"
import Logo6 from "../Assets/Logo6.png"
import Logo7 from "../Assets/Logo7.png"
import Person1 from "../Assets/Frame 4857.png"
import Person2 from "../Assets/Frame 4863.png"
const Winningformula = () => {
  return (
    <>
    <div className='container'>
    <div className='row p-3'>
<h1 className='overshadowhead2'>The winning formulas <span className='span2'>from the founders of</span> </h1>


    
    </div>
    <div className='row  justify-content-center mt-1 p-3'>
<div className='col-lg-1 col-md-6 col-4'>
<img src={Logo1} alt="Logo1"  />
</div>
<div className='col-lg-1 col-md-6 col-6'>
<img src={Logo2} alt="Logo1" />
</div>
<div className='col-lg-2 col-md-6 col-6 pt-2'>
<img src={Logo3} alt="Logo1" />
</div>
<div className='col-lg-2 col-md-6 col-6'>
<img src={Logo4} alt="Logo1" />
</div>
<div className='col-lg-2 col-md-6 col-6 pt-3'>
<img src={Logo5} alt="Logo1" />
</div>
<div className='col-lg-2 col-md-6 col-6 pt-3'>
<img src={Logo6} style={{height:'1.6rem'}} alt="Logo1"  />
</div>
<div className='col-lg-2 col-md-6 col-6 pt-3'>
<img src={Logo7} alt="Logo1" />
</div>
</div>

<div className='row p-5'>
<div className='col-lg-6 col-md-6 col-12 mt-5'>
<img src={Person1}  className="img-fluid"  alt="form1" />
</div>
<div className='col-lg-6 col-md-6 col-12 mt-5 p-5' id='greydiv'>
<div className='row'>
<div className='col-lg-10 col-10'>
<h6 className='greydivhead'>Find. Engage. Automate</h6>
<hr className='greydivhr'></hr>
</div>
</div>
<div className='row'>
<h1 className='greydivoverhead'>Outreach</h1>
<p className='greydivpara'>Hyper-personalised outreach <br></br>platform to warm up prospects. All <br></br>synced with your CRM.
</p>

</div>
<div className='row'> 
<ul style={{color:"black",fontSize:"1rem"}}>
<li className='listhead'>Role-play with 100’s of Customer Avatar2</li>
<li className='listhead'>Automated Coachin</li>
<li className='listhead'>Find out who can sell within a
week. (fail fast)</li>
</ul>
</div>
<button className='btn getstartedbtn'>Get Started</button>

</div>
</div>
<div className='row p-5'>
<div className='col-lg-6 col-md-6 col-12 mt-5 p-5 ' id='greydiv'>
<div className='row'>
<div className='col-lg-10 col-10'>
<h6 className='greydivhead'>Find. Engage. Automate</h6>
<hr className='greydivhr'></hr>
</div>
</div>
<div className='row'>
<h1 className='greydivoverhead'>AI Sales Training</h1>
<p className='greydivpara'>Develop sales skills rapidly and get<br></br> a year of sales experience in just 14<br></br> days 
</p>

</div>
<div className='row'> 
<ul style={{color:"black",fontSize:"1rem"}}>
<li className='listhead'>Role-play with 100’s of Customer Avatar2</li>
<li className='listhead'>Automated Coachin</li>
<li className='listhead'>Find out who can sell within a
week. (fail fast)</li>
</ul>
</div>
<button className='btn getstartedbtn'>Get Started</button>

</div>
<div className='col-lg-6 col-md-6 col-12 mt-5 order-2 '>
<img src={Person2} className="img-fluid"  alt="form1" />
</div>
</div>
<div className='row p-5'>

<h1 className='overshadowhead4 '>Meet the experts and Revolutionise your sales performance in <span className='span2'>14 Days</span></h1>
</div>




    </div>
    </>
  )
}

export default Winningformula