import React from 'react';

const PlaylistResults = ({playlist}) => {
  return (
    <div>
      <h3>{playlist.title}</h3>
      <a href={playlist.url} target="_blank">Click Here to Listen</a><br></br>
      <img src={playlist.image}></img>
    </div>
  )
};

export default PlaylistResults;