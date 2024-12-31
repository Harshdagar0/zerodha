import React from 'react';
function Left({imgurl,heading,des,link,link2}) {
    return ( 
        <div className='container'>
             <div className='row mt-5'>
                <div className='col-6 mt-5  p-5'>
                    <h1 className='pt-5'>{heading}</h1>
                    <p>{des}</p>
                    <a href='' style={{textDecoration:"none"}}>{link2}</a> <br></br><br></br>
                    
                     </div>
                <div className='col-4 '>
                    <img src={imgurl} ></img>
                </div>
            </div>
        </div>
     )
}

export default Left;
