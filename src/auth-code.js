export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';
const clientId = 'c1a6838f444249b69a78c89074c2e47e';
// export const clientSecret = '89ba1ad2b279472fa33565b8394a748e';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'playlist-read-collaborative',
    'user-modify-playback-state',
    'playlist-read-private'

];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopre=${scopes.join('%20')}&response_type=token&show_dialog=true`;


export const getToken = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {})
}