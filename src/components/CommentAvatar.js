function CommentAvatar(props){
    return(
       
            <img className='user-inf' 
            src={props.author.avatarUrl}
             alt ={props.author.name}></img>

    )
}
export default CommentAvatar