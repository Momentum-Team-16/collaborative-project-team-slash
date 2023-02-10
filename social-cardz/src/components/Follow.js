import { requestFollowUser } from './Requests'; 

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