import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login';
import {getToken} from './auth-code';
import SpotifyWebApi from 'spotify-web-api-js'
import PlaylistFinder from './components/PlaylistFinder';

//Client Id: c1a6838f444249b69a78c89074c2e47e
//Client Secret: 89ba1ad2b279472fa33565b8394a748e
//Redirect URI: http://localhost:8888/callback
//Get: https://accounts.spotify.com/authorize


// https://accounts.spotify.com/authorize?client_id=c1a6838f444249b69a78c89074c2e47e&response_type=code&redirect_uri=http://localhost:3000/

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const hash = getToken();
    window.location.hash = '';
    const _token = hash.access_token

    
    
    if (_token) {
      setToken(_token)
      console.log('token', _token)
      spotify.setAccessToken(_token);
      localStorage.setItem('auth-token', _token)

      spotify.getMe()
      .then((res) => setUser(res.display_name))

      spotify.getUserPlaylists()
      .then((res) =>{
        console.log('get playlists', res.items)
        setPlaylists(res.items)
      })
      
  
    }


    // console.log('token', token)
  }, [token, user]);


  return (
    <div className="App">

    {
      token ? (
        <PlaylistFinder token={token} user={user} playlists={playlists} />
      ) : (
        <Login />
      )
    }


    </div>
  );
}

export default App;
