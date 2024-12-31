import React from 'react';
function Hero() {
    return (  
        <div className='container mb-5'>
            <div className='row text-center'>
                <img src='media/images/homehero.png' alt='Hero-image' className='mb-5'/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button  className='p-1 btn btn-primary ' style={{width:"15%",margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>


    );
}

export default Hero;