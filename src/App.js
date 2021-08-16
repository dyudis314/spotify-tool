import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
//import Form from './components/Form';

function App() {

  const [token, setToken] = useState("");

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