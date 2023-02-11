import { requestFollowUser } from './Requests'; 

export const Follow = ({token, ownerId}) => {

    const followUser = () => {
        requestFollowUser(token, ownerId)
    }

    return (
        <div className="follow">
        <button onClick={followUser}>Catch Leafbag</button>
        </div> 
    )
}

