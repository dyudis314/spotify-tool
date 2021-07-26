import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tracks = () => {

  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([]);

  const id = '43O3c6wewpzPKwVaGEEtBM';
  const market = 'US'

  // https://open.spotify.com/artist/5e9F4w3zRnUHwBPyP1SXeN?si=15OOJnGfQfWHqetX-bv4hw&dl_branch=1

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
    }).then(tokenresponse => {
      console.log(tokenresponse.data.access_token);
      setToken(tokenresponse.data.access_token);
     //API CALL https://open.spotify.com/artist/43O3c6wewpzPKwVaGEEtBM?si=1_ylCz-TRO29f4bhGnDQ6A&dl_branch=1
      axios(`https://api.spotify.com/v1/artists/${id}/related-artists
      `, {
        'method' : 'GET',
        'headers' : {
          'Content-Type' : 'applications/json',
          'Accept' : 'application/json',
          'Authorization' : 'Bearer ' + tokenresponse.data.access_token
        }
      }).then(trackresponse=> {
        console.log(trackresponse.data);
        setTracks(trackresponse.data.tracks);
      }).catch(error=> console.log(error))
    }).catch(error => console.log(error))

    
  }, [])

  return(
    <div>
      
    </div>
  )
}

export default Tracks;