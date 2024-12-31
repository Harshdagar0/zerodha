import React from 'react';
function State() {
    return ( 
        <div className='container p-3'>
            <div className='row mt-5 p-4'>
                <div className='col-6'>
                    <h1>Trust with confidence</h1>
                    <h2 className='pt-4'> Customer-first always</h2>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily 
                    retail exchange volumes in India.</p>
                    <h2 className='pt-4'>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='pt-4'>The Zerodha universe</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='pt-4'>Do better with money</h2>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 mt-5 text-center '>
                    <img className='pb-5' src='media/images/ecosystem.png' alt='ecosystem' style={{width:"100%"}}/>
                    <a href='#'style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>
        </div>
     )
}

export default State;
