import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function SignIn() {
    let [email,setemail] = useState();
    let [password,setpassword] = useState();
    function savepass(e){
        setpassword(e.target.value);
    };
    function saveemail(e){
        setemail(e.target.value);
    };
    return (
        <div className='container mt-5'>
            <div className='row pt-5'>
                <div className='col-8 pt-5'>
                    <img src='media/images/signup.png' alt='sinpup_img'></img>
                </div>
                <div className='col-4 pt-5'>
                    <p style={{ fontWeight: "600" }} className='fs-2 pt-5'>Sign In Now</p>
                    <p style={{ color: "GrayText" }} className='fs-5'>Or track your existing application.</p>
                    <form action='' method='get' >  
                    <TextField
                        required
                        id="outlined-required-input"
                        label="Email"
                        onChange={saveemail}
                    /><br></br><br></br>
                     <TextField
                        required
                        id="outlined-required-input"
                        label="Password"
                        type='password'
                        onChange={savepass}
                    /><br></br><br></br>
                    <button className='ms-5 btn btn-dark'>Sign In</button>
                    </form>
                    <p className='mt-4' >If you have already account click hera <a href='/Login' style={{textDecoration:"none"}}>Signup</a></p>
                </div>
            </div>
        </div>
    );
}
export default SignIn;