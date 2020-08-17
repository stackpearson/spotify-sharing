import React, {useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js'




const PlaylistFinder = (props) => {
  const spotify = new SpotifyWebApi();
  const token = localStorage.getItem('auth-token');
  spotify.setAccessToken(token);

  const [tracks, setTracks] = useState([])

  const getPlaylistTracks = async (playlistId) => {
    spotify.getPlaylist(playlistId)
      .then((res) => {
      console.log('playlist get', res.tracks.items)
      setTracks([]);
      setTracks(res.tracks.items);
    }, [])
  } 

    return (<>
          <div className='playlist-header'>{props.user}</div>
            <div className='playlist-container'>
              <div className='playlists'>
                {/* <ul> */}
                  {props.playlists.map(list => {
                      return(
                        <div key={list.id}>
                          <li className='playlist-items' onClick={() => { getPlaylistTracks(list.id) }} >{list.name}</li>
                        </div> 
                      )
                  })}         
                {/* </ul> */}
              </div>

              <div className='tracks'>
                <ul>
                  {tracks.map(song => {
                      return(
                          <li className='track-info' key={song.added_at}>
                            {song.track.name} | {song.track.artists[0].name} | {song.track.album.name}
                          </li>
                      )
                  })}         
                </ul>
              </div>
        </div>
   </>);
}

export default PlaylistFinder;