import { useEffect, useState } from 'react'; 
import { requestMyCards } from './Requests';

export const MyCardz = ({token}) => {
    const [mine, setMine] = useState([])
    useEffect(() => {
        requestMyCards(token)
        .then(res => setMine(res.data))
    }, [token])

    return (
        <h2>Domestic Maples</h2>
    )
};