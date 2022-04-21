
function CommentDate (props){
    function formatDate(date) {
        return date.toLocaleDateString();
      }
    return (
        <div className="user-comdate">
            <div>
                {formatDate(props.date)}
            </div>       
        </div>
    )
}
export default CommentDate