
import CommentWrapper from "../UI/CommentWrapper"
import CommentDate from "./CommentDate"
import UserInfo from "../user/UserInfo"

function Comment(props){

    return (
        <div>
            <div className='UserInfo'>
                <UserInfo author= {props.author}/>
            </div>
        <CommentWrapper className='Comment-text'>
            {props.text}
            <CommentDate date={props.date}/>
        </CommentWrapper>
        </div>
    )
}
export default Comment