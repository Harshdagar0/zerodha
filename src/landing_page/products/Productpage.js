import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import Right from './Right';
import Left from './Left';
function Productpage() {
    return ( 
        <>
            <Hero/>
            <Right
             imgurl="media/images/kite.png" 
             heading="Kite"
             des="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
             link="Try demo "
             link2="Learn more"
             />
              <Left
             imgurl="media/images/console.png" 
             heading="Console"
             des="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
             link="Try demo "
             link2="Learn more"
             />
               <Right
             imgurl="media/images/coin.png"
             heading="Coin"
             des="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
             link="Try demo"
             />
              <Left
             imgurl="media/images/kiteconnect.png" 
             heading="Kite Connect API"
             des="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
             link="Try demo "
             link2="Learn more"
             />
              <Right
             imgurl="media/images/varsity.png" 
             heading="Varsity mobile"
             des="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
             />
            <Universe/>

        </>
     )
}

export default Productpage;