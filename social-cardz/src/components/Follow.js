import { requestFollowUser, requestOtherCards } from './Requests'; 

export const Follow = ({token, ownerId}) => {

    const followUser = () => {
        requestOtherCards(token, ownerId)
        .then(requestFollowUser(token, ownerId)) 
        .then((res) => res.data)
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