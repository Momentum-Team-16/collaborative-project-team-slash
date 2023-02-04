import { MyCards } from './Requests'; 
import { useEffect, useState } from 'react'; 


export const MyCardz = ({token}) => {
    const [mine, setMine] = useState([])
    useEffect(() => {
        MyCards(token)
        .then(res => setMine(res.data))
    }, [token])

    return (
        <h2>Property Maples</h2>
    )
};