import React from 'react';
import {loginUrl} from '../auth-code'
 

const Login = () => {

    return(
        <div className='login-page'>
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='spotify logo' />

            <a href={loginUrl} className='login-link'>Login With Spotify</a>
        </div>
    )

}

export default Login