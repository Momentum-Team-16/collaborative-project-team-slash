import { requestUnfollowUser } from "./Requests"

export const Unfollow = ({ token, ownerId}) => {

    const unfollowUser = () => {

        requestUnfollowUser(token, ownerId) 
            .then((res) => res.data === '' && (window.location.reload())) /* change this (window.location.reload()) */ 
            console.log("unfollowed")
    }

    return (
        <button className="erasebutt" onClick={unfollowUser}>Dump Leafbag</button>
    )
}