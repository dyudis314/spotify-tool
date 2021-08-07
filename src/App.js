import { useState } from 'react';
import './App.css';
import Artistslist from './components/Artistslist';
import Form from './components/Form';

function App() {

  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <h1>Spotify Tool</h1>
      <Artistslist />
      <Form
      inputText={inputText}
      setInputText={setInputText} />
    </div>
  );
}

export default App;
