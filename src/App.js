import Comment from './components/Comment';
import './App.css';
import CommentWrapper from './UI/CommentWrapper';

function App() {

  const comment = [
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/62/62',
      },
    },
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
      },
    },
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
      },
    },
  ];
  
  return (
    <CommentWrapper className="from-app">
      {comment.map((elem, index)=>(
        <Comment key={index} author={elem.author} text={elem.text} date={elem.date}/>
      ))}
       
    </CommentWrapper>
  );
}

export default App;
