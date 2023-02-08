import { useState } from 'react'
import { requestCreateCard } from './Requests'

export const CreateCard = ({token}) => {
    const [expand, setExpand] = useState(null)
    const [title, setTitle] = useState('')
    const [borderColor, setBorderColor] = useState('Black')
    const [deFont, setDeFont] = useState('Times New Roman')
    const [colorText, setColorText] = useState('Black')
    const [frontText, setFrontText] = useState('')
    const [backText, setBackText] = useState('')

    let createCard = {
        "title": `${title}`,
        "border_color": `${borderColor}`, 
        "front_message": `${frontText}`, 
        "back_message": `${backText}`, 
        //"front_image":
        //"back_image":
        "font": `${deFont}`, 
        "text_color": `${colorText}`,
        //"tags": 
    }

    const handleCreate = (event) => {
        event.preventDefault() 

        requestCreateCard(token, createCard)

        setTitle('')
        setBorderColor('Black')
        setDeFont('Times New Roman')
        setColorText('Black')
        setFrontText('')
        setBackText('')

    }
   
    return (
        <>
        <h2>Maple Leaf Buds</h2>
        <div className="createcard-box">
        <p>Title</p>
                <input className="title-box" type='text' value={title}
                    onChange={e => setTitle(e.target.value)}></input>
                    <br/>  
                    <br/>
                    <button className="bordbutt" onClick={() => { expand === 1 ? setExpand(null) : setExpand(1) }}>Leaf Border Color</button>
                    {expand === 1 && (
                    <div className="paint-bord">
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'Black' }} onClick={() => { setBorderColor('Black') }}>Black</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'White' }} onClick={() => { setBorderColor('White') }}>White</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: '#1D72AA' }} onClick={() => { setBorderColor('Blue') }}>Blue</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: '#947600' }} onClick={() => { setBorderColor('Yellow') }}>Yellow</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'Green' }} onClick={() => { setBorderColor('Green') }}>Green</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'Purple' }} onClick={() => { setBorderColor('Purple') }}>Purple</button>
                        </div>
                         )}
                    <br/>
                    <br/>
                    <button className="fontfeet" onClick={() => { expand === 2 ? setExpand(null) : setExpand(2) }}>Leaf Text Style</button>
                    {expand === 2 && (
                    <div className="font-bord">
                                <button className="btn" style={{ font: 'Times New Roman' }} onClick={() => { setDeFont('Times New Roman') }}>Times New Roman</button>
                                <button className="btn" style={{ font: 'Arial' }} onClick={() => { setDeFont('Arial') }}>Arial</button>
                                <button className="btn" style={{ font: 'Century Gothic' }} onClick={() => { setDeFont('Century Gothic') }}>Century Gothic</button>
                                <button className="btn" style={{ font: 'American Typewriter' }} onClick={() => { setDeFont('American Typewriter') }}>American Typewriter</button>
                        </div>
                         )}
                    <br/>
                    <br/>

                    <button className="colorcollar" onClick={() => { expand === 3 ? setExpand(null) : setExpand(3) }}>Leaf Text Color</button>
                    {expand === 3 && (
                    <div className="paint-text-bord">
                                <button className="btn" style={{ color: 'Black' }} onClick={() => { setColorText('Black') }}>Black</button>
                                <button className="btn" style={{ color: 'White' }} onClick={() => { setColorText('White') }}>White</button>
                                <button className="btn" style={{ color: '#1D72AA' }} onClick={() => { setColorText('Blue') }}>Blue</button>
                                <button className="btn" style={{ color: '#947600' }} onClick={() => { setColorText('Yellow') }}>Yellow</button>
                                <button className="btn" style={{ color: 'Green' }} onClick={() => { setColorText('Green') }}>Green</button>
                                <button className="btn" style={{ color: 'Purple' }} onClick={() => { setColorText('Purple') }}>Purple</button>
                        </div>
                         )}
                    <br/> 
                    <br/>
                    <p className="front-message">Front Message</p>
                    <input className="fronttext-box" type='text' value={frontText} 
                        onChange={e => setFrontText(e.target.value)}></input>
                    <p className="back-message">Back Message</p>
                    <input className="backtext-box" type='text' value={backText}
                        onChange={e => setBackText(e.target.value)}></input>
                    <br/>
                    <br/>    
                    <br/>
                    <br/>         
                    <button className="create-button" onClick={handleCreate}>Turn a New Leaf</button>
        </div>
        <br/>
        <div className="leaf-models">
            <div className="created-card" style={{border: borderColor }}> 
            <p style={{ textAlign: 'center', fontFamily: deFont, color: colorText,
                padding: '10px'}}>{title}<br/><br/>{frontText}</p>
            </div>
        </div>
        </> 
    )
}