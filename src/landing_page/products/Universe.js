import React from 'react';
import Mini from './Mini';
function Universe() {
    return (
        <div className='conainter text-center p-5'>
            <div className='row '>
                <h1 className='pb-3'>The Zerodha Universe</h1>
                <p className='pb-5'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>
            <div className='row ps-5'>

                <div className='col-3'>
                    <Mini
                        imgurl="media/images/zerodhaFundhouse.png"
                        about="Our asset management venture
                            that is creating simple and transparent index
                             funds to help you save for your goals."
                    />
                </div>
                <div className='col-1'></div>

                <div className='col-3'>
                    <Mini
                        imgurl="media/images/sensibullLogo.svg"
                        about="Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more."
                    />

                </div>
                <div className='col-1'></div>

                <div className='col-3'>
                    <Mini
                        imgurl="media/images/tijori.svg"
                        about="Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more."
                    />

                </div>

            </div>
            <div className='row ps-5 mt-5'>

                <div className='col-3'>
                    <Mini
                        imgurl="media/images/streakLogo.png"
                        about="
Systematic trading platform
that allows you to create and backtest
strategies without coding."
                    />
                </div>
                <div className='col-1'></div>

                <div className='col-3'>
                    <Mini
                        imgurl="media/images/smallcaseLogo.png"
                        about="Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs."
                    />

                </div>
                <div className='col-1'></div>

                <div className='col-3'>
                    <Mini
                        imgurl="media/images/dittoLogo.png"
                        about="Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free"
                    />

                </div>

            </div>
        </div>
    )
}

export default Universe;