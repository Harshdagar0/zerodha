import React from 'react';

function Hero() {
    return (
        <div className='container'>
          <div className='row text-center p-5'>
            <h1>Charges</h1>
            <p className='fs-4' style={{color:"#9b9b9b"}}>List of all charges and taxes</p>
          </div>
          <div className='row p-5 '>
            <div className='col'>
              <img src='media/images/pricing-eq.svg'></img>
            </div>
            <div className='col'>
            <img src='media/images/pricing-eq (2).svg'></img>
            </div>
            <div className='col'>
            <img src='media/images/pricing-eq (1).svg'></img>
            </div>
            <div className='row p-5 '>
              <div className='col '>
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
              </div>
              <div className='col ms-5'>
                <h2>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.

                  </p>
              </div>
              <div className='col ms-5'>
                <h2 className='ms-5'>Free direct MF</h2>
                <p className='ms-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
              </div>
            </div>
          </div>
          <div className='row'>
          <table className='border '>
            <tr  className='border'>
               <th className='p-3 '>Type of account</th>
               <th>	Charges</th>
                </tr>
             <tr>
               <td className='p-3'>Online account</td>
               <td>Free</td>                
             </tr>
             <tr style={{backgroundColor:"#f1f1f1"}}>
               <td className='p-3'>Offline account</td>
               <td>Free</td>                
             </tr>
             <tr>
               <td className='p-3'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
               <td>₹ 500</td>                
             </tr>
             <tr style={{backgroundColor:"#f1f1f1"}}>
               <td className='p-3'>NRI account (offline only)</td>
               <td>₹ 500</td>                
             </tr>
          </table>
          </div>
        </div>
      )
}

export default Hero;