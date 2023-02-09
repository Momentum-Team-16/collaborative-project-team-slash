import { useState } from 'react';
import { requestFollowUser } from './Requests'; 
import { useNavigate } from 'react-router-dom'; 

export const Follow = ({token, ownerId}) => {

    const followUser = () => {
        requestFollowUser(token, ownerId)
        .then((res) => console.log('you clicked me!'))
    }

    return (
        <div className="follow">
        <button onClick={followUser}>Catch Leafbag</button>
        </div> 
    )
}