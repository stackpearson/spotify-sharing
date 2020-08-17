import React, {useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';



const PlaylistFinder = (props) => {
  const spotify = new SpotifyWebApi();
  const token = localStorage.getItem('auth-token');
  spotify.setAccessToken(token);

  const [tracks, setTracks] = useState()

  const getPlaylistTracks = async (playlistId) => {
    spotify.getPlaylist(playlistId)
      .then((res) => {
      console.log('playlist get', res.tracks.items)
      setTracks();
      setTracks(res.tracks.items);
      document.getElementById('playlists').style.display='none'
    }, [])
  }


  const hideTracks = () => {
    document.getElementById('playlists').style.display='block'
    setTracks();
  }

    return (<>
          <div className='playlist-header'>{props.user}</div>

            <div className='playlist-container'>
              <div id='playlists' className='playlists'>
                  {props.playlists.map(list => {
                      return(
                        <div className='mapped-playlists' key={list.id}>
                          <div className='playlist-image'>
                            <img className='img' alt='album artwork' src={list.images[0].url} />
                          </div>
                          <div clasname='playlist-item-container'>
                            <li className='playlist-items' onClick={() => { getPlaylistTracks(list.id) }} >{list.name}</li>
                          </div>
                          
                        </div> 
                      )
                  })}         
              </div>

              {
                tracks ? (
                  <div className='tracks'>
                    <div className='track-controls'>
                      <div className='send-tracks'>Send Playlist</div>
                      <div onClick={hideTracks} className='collapse-tracks'>X</div>
                    </div>
                    
                  {tracks.map(song => {
                      return(
                          <li className='track-info' key={song.added_at}>
                            <span className='track-name'>{song.track.name}</span> | <span className='artist-name'>{song.track.artists[0].name}</span>
                          </li>
                      )
                  })}
              </div>
                ) : (
                  null
                )
   
              }
        </div>
   </>);
}

export default PlaylistFinder;