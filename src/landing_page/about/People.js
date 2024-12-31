import React from 'react';
function People() {
    return (
      <div className='container'>
        <h1 className='text-center p-5'>People</h1>
        <div className='row '>
          <div className='col text-center'>
            <img className='rounded-circle' style={{width:"50%"}} src='media/images/nithinkamath.jpg' alt='nitin'></img>
            <p>Nithin Kamath</p>
            <p>Founder, CEO</p>
          </div>
          <div className='col pt-4'>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
            Playing basketball is his zen.
            </p>
            <p>
            Connect on <a href='' className='link-2'> Homepage</a> / <a href='' className='link-2'>TradingQnA </a>/<a href='' className='link-2'>Twitter</a> 
            </p>

          </div>

        </div>
      
      </div>
    )  
}

export default People;