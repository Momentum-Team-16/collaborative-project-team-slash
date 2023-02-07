import { useState } from 'react'
import { requestCreateCard } from './Requests'

export const CreateCard = ({token}) => {
    const [title, setTitle] = useState('')
    const [borderColor, setBorderColor] = useState('Black')
    const [deFont, setDeFont] = useState('Times New Roman')
    const [colorText, setColorText] = useState('Black')
    const [frontText, setFrontText] = useState('')
    const [backText, setBackText] = useState('')

    let createCard = {
        "title": `${title}`,
        "front_message": `${frontText}`, 
        "back_message": `${backText}`, 
        //"front_image":
        //"back_image":
        "font": `${deFont}`, 
        "text_color": `${colorText}`,
        "border_color": `${borderColor}`, 
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
                    <p>Front Message</p>
                    <input className="fronttext-box" type='text' value={frontText} 
                        onChange={e => setFrontText(e.target.value)}></input>
                    <p>Back Message</p>
                    <input className="backtext-box" type='text' value={backText}
                        onChange={e => setBackText(e.target.value)}></input>
                    <br/>
                    <br/>             
                    <button className="create-button" onClick={handleCreate}>Create Card</button>
        </div>
        </> 
    )
}