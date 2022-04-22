import Comment from './components/Comment';
import './App.css';
import CommentWrapper from './UI/CommentWrapper';
import { useState } from 'react';


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

function App() {
  const newArray = comment.map((el) => {
    return {...el,id:Math.random().toString()}
  })
  
  const [state,setState] = useState(newArray)
  console.log(state);
  
  return (
    <CommentWrapper className="from-app">
      {state.map((elem)=>(
        <Comment key={elem.id} author={elem.author} text={elem.text} date={elem.date}/>
      ))}
    </CommentWrapper>
  );
}

export default App;
