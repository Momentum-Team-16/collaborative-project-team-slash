import { useState } from 'react';
import { requestFollowUser, requestOtherCards } from './Requests'; 

export const Follow = ({token, owner}) => {

    const [ownerId, setOwnerId] = useState(null) 

    const followUser = () => {
        requestOtherCards(token, owner)
        .then((res) => {
            setOwnerId(res.data.owner); 
            ownerId && (requestFollowUser(token, ownerId))
        })
    }

    const myUser = token

    const user =! myUser

    return (
        <div className="follow">
        {user ? (
        <button onClick={followUser}>Catch Leafbag</button>
        ) : (
        myUser )}
        </div> 
    )
}