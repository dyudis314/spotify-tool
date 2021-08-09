/*
import React from 'react';


const Form = ({inputText, setInputText, setPlaylists, playlists}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

        // On click, we want to query the api using the input text, and then take those results and map it out as a list
    const searchHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        setPlaylists([
        ...playlists, {
            artistName: inputText,
            key: Math.random() * 1000,
            //img: trackresponse.data.artists.img (example)
        }]);
        setInputText("");
    };

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} value={inputText}/>
                <button onClick={searchHandler} value={inputText}>Search</button>
            </form>
        </div>
    );
};

export default Form;
*/