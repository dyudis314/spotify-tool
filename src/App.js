import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
//import Form from './components/Form';

function App() {

  const [token, setToken] = useState("");
  const [status, setStatus] = useState("Liked");
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case 'Liked' :
      setFilteredPlaylists(filteredPlaylists.filter(playlists => playlists.liked === true))
      break;
      setFilteredPlaylists(filteredPlaylists.filter(playlists => playlists.liked === false))
    }
  }

  return (
    <div className="App">
      <h1>Playlist Finder</h1>
        <Dashboard
        token={token}
        setToken={setToken}
        />
       
    </div>
  );
}

export default App;