import React, {useState, useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
const spotify = new SpotifyWebApi();



const PlaylistFinder = (props) => {

  const [tracks, setTracks] = useState([])

  useEffect(() => {
      // const getTracks = (playlistId) => {
    // spotify.setAccessToken(props.token)
  
    spotify.getPlaylist('6nMJ4VEGhhSJzsXg4Zv4tk')
    .then((res) => {
      console.log('playlist get', res.tracks.items)
      setTracks(res.tracks.items)
    })
  // }
  }, [])


  

    return (
    <>
        <div>

          <div className='playlist-header'>{props.user}</div>
  
          <div className='playlists'>
            <ul>
              {props.playlists.map(list => {
                  return(
                      <li key={list.id}>{list.name}</li>
                  )
              })}         
            </ul>
          </div>

          <div className='tracks'>
          <ul>
              {tracks.map(song => {
                  return(
                      <div className='track-info' key={song.added_at}>
                        Song:{song.track.name}<br/>
                        Artist: {song.track.artists[0].name}<br/>
                        Album: {song.track.album.name}
                      </div>
                  )
              })}         
            </ul>
          </div>

        </div>
   </>);
}

export default PlaylistFinder;