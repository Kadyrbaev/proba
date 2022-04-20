import './CommentWrapper.css'
function CommentWrapper(props){
    return <div className="user-info">
        {props.children}</div>
}
export default CommentWrapper