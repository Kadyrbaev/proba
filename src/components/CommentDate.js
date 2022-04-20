function CommentDate (props){
    function formatDate(date) {
        return date.toLocaleDateString();
      }
    return (
        <div>
            <div className='Comment-date'>
            {formatDate(props.date)}
        </div>
        </div>
    )
}
export default CommentDate