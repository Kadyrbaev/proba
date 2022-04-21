
import CommentWrapper from '../UI/CommentWrapper';
import CommentAvatar from '../components/CommentAvatar';
import './UserInfo.css';
function UserInfo(props) {
  return (
    <CommentWrapper className="user-info">
        <CommentAvatar author={props.author} className="img"/>
        <div className="user-comdate">{props.author.name}</div>
    </CommentWrapper>
  );
}
export default UserInfo;