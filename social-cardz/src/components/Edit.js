import { requestEditCard, requestSingleCard } from './Requests';
import { useEffect, useState } from 'react'


export const Edit = ({token, cardId}) => {
    const [editor, setEditor] = useState(false)
    const [expand, setExpand] = useState(null)
    const [title, setTitle] = useState('')
    const [colorOfBorder, setColorOfBorder] = useState('Black')
    const [deFont, setDeFont] = useState('Times New Roman')
    const [colorText, setColorText] = useState('Black')
    const [frontText, setFrontText] = useState('')
    const [backText, setBackText] = useState('')
    const [front, setFront] = useState(true)


    useEffect(() => {
        requestSingleCard(token, cardId)
        .then((res) =>{ 
            setCards(res.data);
            setFrontText(res.data.front_message)
            setCanvasImg(res.data.front_image)
            setFrontTextColor(res.data.text_color)
            setTextAlign(res.data.text_align)
            setDeFont(res.data.text_font)
            setBorderColor(res.data.border_color)
            setBorderStyle(res.data.border_style)   
            
        })
    })


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
        //"front_image":
        "font": `${deFont}`, 
        "text_color": `${colorText}`,
        //"tags": 
    }

    const handleCreate = (event) => {
        event.preventDefault() 

        requestEditCard(token, editCard)

        setTitle('')
        setColorOfBorder('Black')
        setDeFont('Times New Roman')
        setColorText('Black')
        setFrontText('')
        setBackText('')

    }
   

    return (
        <>
            <button onClick={handleClick}>Trace Leaf</button>
         
        </>
    );
}

// useParams to call -- and route the edit to a new page 