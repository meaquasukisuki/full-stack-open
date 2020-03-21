import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  let maxIndex;
  const [selected, setSelected] = useState(0);
  const voteArr = new Array(anecdotes.length).fill(0);
  const [vote, setVote] = useState(voteArr);
  const handler = () => {
    setSelected(selected+1)
  };
  const voteHandler = (number)  => {
    vote[number] += 1;
    setVote([...vote]);
    
  };
  maxIndex = vote.indexOf(Math.max(...vote));
  
  
  return (
    <div>
      {props.anecdotes[selected]}
      <br/>
      <p>has {vote[selected]} votes</p>
      <p>
        <button onClick={() => voteHandler(selected)}>
          vote
        </button>
        <button onClick={handler}>
          next anecdote
        </button>
      </p>
      
      <div className="most">
        <h1>
          Anecdote with most votes
        </h1>
        <br/>
        <p>
          {
            props.anecdotes[maxIndex]
          }
        </p>
      </div>
      
      
    </div>
  )
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
