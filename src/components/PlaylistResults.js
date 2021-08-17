import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';



const PlaylistResults = ({playlist, searchResults, setSearchResults}) => {

  const likeHandler = (e) => {
    console.log(e.target);
    setSearchResults(searchResults.map(playlist => {
      if (playlist.id === searchResults.id) {
        return {
          ...playlist, 
          liked: !playlist.liked
        }
      }
      return playlist;
    }))
  }

  const results = {
        width: "100px",
        height: "100px",
        borderRadius: "10px",

      }

  return (
    <div>
      <Card className={`playlist ${playlist.liked ? "liked" : ""}`}>
        <CardContent>
        <h3>{playlist.title}</h3>
          <a href={playlist.url} target="_blank" rel="noreferrer">Click Here to Listen</a><br></br>
        <img src={playlist.image} style={results} alt="playlist_image"/>
        <button onClick={likeHandler}><i className="far fa-heart"></i></button>
        <button><i className="far fa-trash"></i></button>
        </CardContent>
      </Card>
    <Divider></Divider>
    </div>
  )
};

export default PlaylistResults;