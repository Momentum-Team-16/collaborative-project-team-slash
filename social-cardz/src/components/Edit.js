import { requestSingleCard } from './Requests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 


export const Edit = ({ token, cardId }) => {

    const [editor, setEditor] = useState(false)
    const [expand, setExpand] = useState(null)
    const [title, setTitle] = useState('')
    const [colorOfBorder, setColorOfBorder] = useState(null)
    const [deFont, setDeFont] = useState(null)
    const [colorText, setColorText] = useState(null)
    const [frontText, setFrontText] = useState('')
    const [backText, setBackText] = useState('')
    const [front, setFront] = useState(true)


     /* useEffect(() => {
        requestSingleCard(token, cardId)
        .then((res) =>{ 
            setFrontText(res.data.front_message)
            setColorText(res.data.text_color)
            setDeFont(res.data.text_font)
            setColorOfBorder(res.data.border_color)   
        })
    }) */ 


    const handleClick = (e) => {
        requestSingleCard(token, cardId)
            .then((res) =>
                setEditor(!editor)
            );
    }

    let editCard = {
        "title": `${title}`,
        "border_color": `${colorOfBorder}`,
        "front_message": `${frontText}`,
        "back_message": `${backText}`,
        "font": `${deFont}`,
        "text_color": `${colorText}`,
    }

    const requestEditCard = (token, cardId) => {
        const url = `https://social-cards-wg2j.onrender.com/cards/${cardId}/`
    
        const response = axios.patch(url, {
          title: `${title}`, 
          front_message: `${frontText}`,
          back_message: `${backText}`,
          text_color: `${colorText}`,
          border_color: `${colorOfBorder}`,
          font: `${deFont}`,
        }, {
            headers: {Authorization: `token ${token}`}
        })
        return response
    }

    const handleCreate = (event) => {
        event.preventDefault()

        requestEditCard(token, cardId)
        .then((res) => {
            setTitle(res.data.title)
            setColorOfBorder(res.data.border_color)
            setDeFont(res.data.text_font)
            setColorText(res.data.text_color)
            setFrontText(res.data.front_message)
            setBackText(res.data.back_message)
            
        })
    }


    return (
        <>
            <button onClick={handleClick}>Rearrange Leaf</button>
            {handleClick ? (
            <div className="edit-box">
                        <p><strong>Title</strong></p>
                <input className="title-box" type='text' value={title}
                    onChange={e => setTitle(e.target.value)}></input>
                    <br/>  
                    <br/>
                    <button className="bordbutt" onClick={() => { expand === 1 ? setExpand(null) : setExpand(1) }}>Leaf Border Color</button>
                    {expand === 1 && (
                    <div className="paint-bord">
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'black' }} onClick={() => { setColorOfBorder('Black') }}>Black</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'white' }} onClick={() => { setColorOfBorder('White') }}>White</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'blue' }} onClick={() => { setColorOfBorder('Blue') }}>Blue</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'yellow' }} onClick={() => { setColorOfBorder('Yellow') }}>Yellow</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'green' }} onClick={() => { setColorOfBorder('Green') }}>Green</button>
                                <button className="btn" style={{ borderWidth: '2px', borderColor: 'purple' }} onClick={() => { setColorOfBorder('Purple') }}>Purple</button>
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
                                <button className="btn" style={{ color: 'PURPLE' }} onClick={() => { setColorText('PURPLE') }}>Purple</button>
                        </div>
                         )}
                    <br/> 
                    <br/>        
                    <p className="front-message"><strong>Front Message</strong></p>
                    <input className="fronttext-box" type='text' value={frontText} 
                        onChange={e => setFrontText(e.target.value)}></input>
                    <p className="back-message"><strong>Back Message</strong></p>
                    <input className="backtext-box" type='text' value={backText}
                        onChange={e => setBackText(e.target.value)}></input>
                    <br/>
                    <br/>    
                    <br/>
                    <br/>         
                    <button className="edit-button" onClick={handleCreate}>Trace Leaf</button>
            </div>
            ) : (
                <div>
                    <editor />
                    <p>Check out my button</p>
                </div>
            )}
        </>
    );
}

// useParams to call -- and route the edit to a new page 