import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



const PlaylistResults = ({playlist}) => {

  const results = {
        width: "100px",
        height: "100px",
        borderRadius: "10px",

      }

  return (
    <div>
      <Card>
        <CardContent>
        <h3>{playlist.title}</h3>
          <a href={playlist.url} target="_blank">Click Here to Listen</a><br></br>
        <img src={playlist.image} style={results}/>
        </CardContent>
      </Card>
    <Divider></Divider>
    </div>
  )
};

export default PlaylistResults;