import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import KeyBoard from './keyBoard';
import './keyBoard.css'


export default function ChangeKeyBoard(props) {
    let language1 = "עברית";
    let prevLanguage = "עברית";
    const [stateLanguage, setLanguage] = useState(false);
    const [emoji, setEmoji] = useState(false);
    const [upper, setUpper] = useState(false);
    function changeLanguage() {
        setLanguage(stateLanguage => !stateLanguage);
        setEmoji(false);
        setUpper(upper=>false);  
    }
    
    function changeToEmoji() {
        setEmoji(emoji => !emoji);
    }

    function toUpperCase() {
        setUpper(upper=>!upper);  
    }

    language1 = stateLanguage ? "עברית" : "English"
    prevLanguage = language1;
    language1 = emoji ? "Emoji" : language1;
    language1 = upper ? "UpperCase" : language1;
    
    return (
        <>
            <div className='keyboard'>
                <KeyBoard language={language1} myStyle={props.style} allStyle={props.allStyle}/>
                <button  className='btn' onClick={changeLanguage}>{prevLanguage}</button> 
                <button disabled={!stateLanguage} onClick={toUpperCase}>UpperCase/Lower</button>  
                <button className='btn' onClick={changeToEmoji}>🙂</button>    
            </div >
        </>
    )
}