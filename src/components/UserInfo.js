import CommentWrapper from "../UI/CommentWrapper"
import CommentAvatar from "./CommentAvatar"
function UserInfo(props){
    return (
        <CommentWrapper>
        <div className="user-info">
            <CommentAvatar author={props.author}/>
            {props.author.name}
        </div>
        </CommentWrapper>
    )
}
export default UserInfo