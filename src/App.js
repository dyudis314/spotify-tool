import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
//import Form from './components/Form';

function App() {

  const [token, setToken] = useState("");
  const [inputText, setInputText] = useState("");
  //const [playlists, setPlaylists] = useState([]);

  return (
    <div className="App">
      <h1>Playlist Finder</h1>
        <Dashboard
        token={token}
        setToken={setToken}
        inputText={inputText}
        setInputText={setInputText}
        />
       
    </div>
  );
}

export default App;

/*
 <Form 
        inputText={inputText}
        setInputText={setInputText}
        playlists={playlists}
        setPlaylists={setPlaylists}
        />
        */