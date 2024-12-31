import React from 'react';
function Education() {
    return ( 
        <div className='container p-4 '>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='education'/>
                </div>
                <div className='col-6 pt-5'>
                    <h2 className='pt-3'>
                    Free and open market education</h2>
                    <p className='pt-3'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a   href='#' style={{ textDecoration: "none" }}>Varsity  <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='pt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{ textDecoration: "none" }}>TradingQ&A   <i class="fa-solid fa-arrow-right"></i></a>



                </div>
            </div>
        </div>
     )
}

export default Education;