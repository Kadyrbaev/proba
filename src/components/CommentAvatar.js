function CommentAvatar(props){
    return(
        <div className="user-info">
            <img className='user-inf' 
            src={props.author.avatarUrl}
             alt ={props.author.name}></img>
        </div>
    )
}
export default CommentAvatar