import { useState } from 'react';
import { requestFollowUser, requestOtherCards } from './Requests'; 

export const Follow = ({token, ownerId}) => {

    const [owner, setOwner] = useState(null)

    const followUser = () => {
        requestOtherCards(token, ownerId)
        .then((res) => {
            setOwner(res.data.owner); 
            owner && (requestFollowUser(token, ownerId))
            console.log('followed')
        })
    }

    return (
        <div className="follow">
        <button onClick={followUser}>Catch Leafbag</button>
        </div> 
    )
}