import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './keyBoard.css'

export default function KeyBoard(props) {
    let placeholder;
    let letterArr;
    let numbers;
    const [UndoArr, setUndoArr] = useState([]);
    const [text, setText] = useState([]);
    let state = props.language==="עברית" ? true : false;
    const hebrewKeyBoard = ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ",
        "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", ".",
        "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", ","];

    const englishKeyBoard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '.',
        'z', 'x', 'c', 'v', 'b', 'n', 'm', ',',];

    const emojiKeyBoard = ['😀', '😁', '😂', '🤣', '😍', '😋', '😘', '😪', '😴', '😜',
        '😫', '🤪', '😫', '😝', '🙄', '😗', '😚', '😆', '😮', '😤', '😳',
        '🤭', '🙄', '😉', '🤑', '😭', '😏', '😤'];
    const numbersKeyBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        "@", "#", "$", "%", "&", "(", ")", "+", "=", "-", '/', "'", "?"
    ]
    switch (props.language) {
        case "English":
            letterArr = hebrewKeyBoard;
            placeholder = "...הקלד כאן";
            numbers = numbersKeyBoard;
            break;

        case "עברית":
            letterArr = englishKeyBoard;
            placeholder = "Type here..."
            numbers = numbersKeyBoard;
            break;
        case "Emoji":
            letterArr = emojiKeyBoard;
            numbers = [];
            break;
        case "UpperCase":
            letterArr = englishKeyBoard.map(item => item.toUpperCase());
            numbers = numbersKeyBoard;
            break;
        default:
            letterArr = [];
            break;
    }

    function writing(letterChar) {
       let letter={
            id:letterChar,
            letterContent:letterChar,
            style:props.myStyle,
        }
        setText([...text, letter]);
        setUndoArr(UndoArr => [...UndoArr, text]);
    }

    function deleteLastLetter() {
        setText(previewText => previewText.slice(0, previewText.length - 1));
        setUndoArr(UndoArr => [...UndoArr, text]);
    }

    function deleteAllText() {
        setText([]);
        setUndoArr(UndoArr => [...UndoArr, text]);
    }

    function unDo() {
        setText(UndoArr[UndoArr.length - 1]);
        setUndoArr(UndoArr.slice(0, UndoArr.length - 1));
    }

    function space() {
        let emptyLetter={
            id:'space',
            letterContent:" ",
            style:props.myStyle
        }
        setText([...text,emptyLetter]);
        setUndoArr(UndoArr => [...UndoArr, text]);
    }

    function upperAll()
    {
        const upperText=text.map(char=>{return {...char,letterContent:char.letterContent.toUpperCase()}});
        setText(upperText);
        setUndoArr(UndoArr => [...UndoArr, text]);
    }

    function lowerAll()
    {
        const upperText=text.map(char=>{return {...char,letterContent:char.letterContent.toLowerCase()}});
        setText(upperText);
        setUndoArr(UndoArr => [...UndoArr, text]);
    }

    function styleAll()
    {
        const styleText=text.map(letter=>{return{...letter,style:props.allStyle}});
        setText(styleText);
        setUndoArr(UndoArr => [...UndoArr, text]);
    }

    return (
        <>
           <div  className='textArea'>
            {text.map((letterObject, index)=>(
                <label key={index} id={letterObject.id} style={letterObject.style}>{letterObject.letterContent}</label>
            ))}
            </div>
            {numbers.map((number, index) => (
                <button className='btn' key={index} onClick={() => { writing(number) }}> {number} </button>))}
            {letterArr.map((letter, index) => (
                <button className='btn' key={index} onClick={() => { writing(letter) }}> {letter} </button>))}
            <button className='btn' onClick={unDo}>UnDo</button>
            <button className='space' onClick={space}>Space</button>
            <button className='btn' onClick={deleteLastLetter}>Delete</button>
            <button className='btn' onClick={deleteAllText}>DeleteAll</button>
            <button className='btn' disabled={!state} onClick={upperAll}>UpperAll</button>
            <button className='btn' disabled={!state} onClick={lowerAll}>LowerAll</button>
            <button className='btn' onClick={styleAll}>Apply to all the text</button>
        </>
    )
}