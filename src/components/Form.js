import React from 'react';

const Form = ({inputText, setInputText}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} value={inputText}/>              
            </form>
        </div>
    );
};

export default Form;