import React from 'react';
function Right({imgurl,heading,des,link,link2}) {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <img src={imgurl} ></img>
                </div>
                <div className='col-4 pt-5'>
                    <h1>{heading}</h1>
                    <p>{des}</p>
                    <a href='' style={{textDecoration:"none"}}>{link}</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''  style={{textDecoration:"none"}}>{link2}</a><br></br><br></br>
                    <a href=''><img src='media/images/appstorebadge.svg'></img></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''><img src='media/images/googlePLaybadge.svg'></img></a>
                </div>
            </div>
        </div>
    )
}

export default Right;