import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import ChangeKeyBoard from './changeKeyBoard'
import './StylesButtons.css'

export default function StylesButtons() {

    const fontOptions = [
        { name: 'Arial', value: 'Arial, sans-serif' },
        { name: 'Times New Roman', value: '"Times New Roman", serif' },
        { name: 'Helvetica', value: 'Helvetica, sans-serif' },
        { name: 'Calibri', value: 'Calibri, sans-serif' },
        { name: 'Verdana', value: 'Verdana, sans-serif' },
        { name: 'Courier New', value: '"Courier New", monospace' },
    ];

    const [myStyle, setMyStyle] = useState({
        fontSize: `${14}px`,
        color: "black",
        fontFamily: "Arial, Helvetica, sans-serif",
    });

    const [allStyle, setAllStyle] = useState({
        fontSize: `${14}px`,
        color: "black",
        fontFamily: "Arial, Helvetica, sans-serif",
    });

    function changeNextText(event) {
        console.log(event);
        const newObject = { ...myStyle, fontSize: `${event.target.value}px` }
        console.log(newObject);
        setAllStyle({ ...allStyle, fontSize: `${event.target.value}px` });
        setMyStyle(newObject);
    }
    
    function changeColor(event) {
        const newObject2 = { ...myStyle, color: event.target.value }
        setAllStyle({ ...allStyle, color: event.target.value });
        setMyStyle(newObject2);
    }

    function changeFont(event) {
        const newObject3 = { ...myStyle, fontFamily: event.target.value }
        setAllStyle({ ...allStyle, fontFamily: event.target.value });
        setMyStyle(newObject3);
    }
   
    return (
        <>
            <header>
                <div className='labelStyle'>Style your text</div>
                <input className='fontsize' type="number" min={8} max={72} onChange={changeNextText} placeholder='14' />
                <input className="color" type="color" onChange={changeColor} />
                <select className='fontfamily' onChange={changeFont}>
                    {fontOptions.map((option) => (
                        <option key={option.name} style={{ fontFamily: option.value }}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </header>
            <ChangeKeyBoard style={myStyle} allStyle={allStyle}/>
        </>
    );
}