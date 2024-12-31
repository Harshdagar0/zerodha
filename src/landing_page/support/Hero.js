import React from 'react';
function Hero() {
    return (
       <div className='container-fluid ps-5' style={{backgroundColor:"#387ed1",color:"white",height:"400px"}}>
         {/* <a className='text-end' href=''>Track tickets</a> */}
         <div className='row ms-5'>
          <div className='col'>
          <p className='fs-5 pt-2'>Support Portal</p>
          <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
          <input className='p-3 border border-white w-75 h-25'type='text' placeholder='Eg: how do i activate f&Q' ></input><i  class="fa-solid fa-magnifying-glass p-4" style={{backgroundColor:"white",color:"black"}}></i><br></br>
            <a href=''>Track account opening</a>
            <a href=''> Track segment activation</a>
            <a href=''> Intraday margins</a>
            <a href=''> Kite user manual</a>
          </div>
          <div className='col'></div>
         </div>
       </div>  
      )
}

export default Hero;