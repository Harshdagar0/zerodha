import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 p-2'>
                   <img src='media/images/largestbroker.svg' alt='largestbroker'/> 
                </div>
                <div className='col-6 p-4 mt-5'>
                    <h1>Largest stock broker in india</h1>
                    <p>
                        2+ million zerodha clients contributes to over 15% of all retail order volumes in india daily by trading and investing in:
                    </p>
                    <div className='row pt-5'>
                        <div className='col-6'>
                        <ul>
                            <li>Futures and option</li>
                            <li>Commodity derivatives</li>
                            <li>Current derivatives</li>
                        </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                        <li>Stock and IPOs</li>
                        <li>Direct  mutual funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                        </div>
                    </div>
                    <img className='mt-2' src='media/images/presslogos.png' alt='press' style={{width:"90%"}}/>
                   

                </div>
            </div>
        </div>
     )
}

export default Awards;