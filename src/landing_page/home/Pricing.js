import React from 'react';
function Pricing() {
    return (
        <div className='container p-4'>
            <div className='row'>
                <div className='col-4'>
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className='col-2 '></div>
                {/* <div className='row'> */}
                <div className='col-2 pe-0'>
                    <img src='media/images/pricing-eq.svg' alt='pricing' style={{ width: "100%" }} />
                    <p className='text-center' style={{ fontSize: "10px" }}> Free account
                        opening</p>

                </div>
                
              
                <div className='col-2'>
                    <img src='media/images/pricing-eq (1).svg' alt='pricing' style={{ width: "100%" }} />
                    <p className='text-center' style={{ fontSize: "10px" }}>Free equity delivery
                        and direct mutual funds</p>
                </div>

                <div className='col-2'>
                    <img src='media/images/pricing-eq (2).svg' alt='pricing' style={{ width: "100%" }} />

                    <p className='text-center' style={{ fontSize: "10px" }}> Intraday and
                        F&O</p>

                </div>


            </div>
        </div>
    )
}

export default Pricing;