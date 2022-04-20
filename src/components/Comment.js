import CommentAvatar from "./CommentAvatar"
import CommentDate from "./CommentDate"
import UserInfo from "./UserInfo"
function Comment(props){

    return (
        <div>
            <div className='UserInfo'>
                
                <UserInfo author= {props.author}/>
            </div>
        <div className='Comment-text'>
            {props.text}
            <CommentDate date={props.date}/>
        </div>
        </div>
    )
}
export default Comment