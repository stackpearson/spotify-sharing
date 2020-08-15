import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login';
import {getToken} from './auth-code';

//Client Id: c1a6838f444249b69a78c89074c2e47e
//Client Secret: 89ba1ad2b279472fa33565b8394a748e
//Redirect URI: http://localhost:8888/callback
//Get: https://accounts.spotify.com/authorize


// https://accounts.spotify.com/authorize?client_id=c1a6838f444249b69a78c89074c2e47e&response_type=code&redirect_uri=http://localhost:3000/


function App() {

  const [token, setToken] = useState()

  useEffect(() => {
    const hash = getToken();
    window.location.hash = '';
    const _token = hash.access_token
    
    if (_token) {
      setToken(_token)
    }


    console.log('token', token)
  }, [token]);


  return (
    <div className="App">

    {
      token ? (
        <h1>logged in</h1>
      ) : (
        <Login />
      )
    }

      {/* <Login /> */}

    </div>
  );
}

export default App;
