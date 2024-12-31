import React from 'react';
function Mini({imgurl,about}) {
    return (
        <div className=''>
            <img src={imgurl} style={{width:"50%"}} alt='fund'></img>
            <p>{about}
            </p>
        </div>
    )
}

export default Mini;