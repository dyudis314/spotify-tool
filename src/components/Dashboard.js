import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';
import PlaylistResults from './PlaylistResults';
import { Input } from '@material-ui/core';



const spotifyApi = new SpotifyWebApi({
  clientId: "73ee9f817c17446898b13902a4aa55b6",
})

const Dashboard = ({token, setToken }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)

  useEffect(()=> {
    if (!token) return
    spotifyApi.setAccessToken(token)
  }, [token])

  useEffect(()=> {
    if (!search) return setSearchResults([])
    if(!token) return

    let cancel = false;
    spotifyApi.searchPlaylists(search).then(res => {
      if (cancel) return
    setSearchResults(
    res.body.playlists.items.map(playlist => {
        return { 
         title: playlist.name,
         description: playlist.description,
         image: playlist.images[0].url,
         id: playlist.id,
         url: playlist.external_urls.spotify,
         length: playlist.tracks.total
          }
        }
      ));
    })

    return () => cancel = true;
  }, [search, token])


  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  


  /* API / Token */

  const id = '43O3c6wewpzPKwVaGEEtBM';

  useEffect(() => {
    //const clientID = '73ee9f817c17446898b13902a4aa55b6';
    //const clientSecret = '1228cc2adbb14ae89176deeb7b2f3b3e';
    axios('https://accounts.spotify.com/api/token', {
        'method': 'POST',
        'headers' : {
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + (new Buffer('73ee9f817c17446898b13902a4aa55b6' + ':' + '1228cc2adbb14ae89176deeb7b2f3b3e').toString('base64')
          )},
          data: 'grant_type=client_credentials'
    }).then(token => {
      setToken(token.data.access_token);
      axios(`https://api.spotify.com/v1/artists/${id}/related-artists
      `, {
        'method' : 'GET',
        'headers' : {
          'Content-Type' : 'applications/json',
          'Accept' : 'application/json',
          'Authorization' : 'Bearer ' + token.data.access_token
        }
      }).then(artistresponse => {
        //console.log(artistresponse.data.artists);
        //setArtistData(artistresponse.data.artists); // map this out
      }).catch(error=> console.log(error))
    }).catch(error => console.log(error))
  }, [])

  return(
    <div>
      <form>
        <Input 
        placeholder="Search playlists....(Chill, Energetic, Gym)" 
        value={search} 
        onChange={searchHandler}
        autoComplete="chill"
        type="text"
        />
      </form>
      <div>
        {searchResults.map(playlist => {
          return (
          <PlaylistResults 
          playlist={playlist}
          key={playlist.id}
          />
        )})}
      </div>
    </div>
  )
}

export default Dashboard;