import React, { useState, useEffect } from 'react';
import Feedback from './components/feedback/feedback';
import Reviews from './components/reviews/reviews';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!(localStorage.getItem('comments'))) {
      localStorage.setItem('comments', []);
    } else {
      setComments(JSON.parse(localStorage.getItem('comments')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addFeedback = (newFeedback) => {
    setComments([...comments, newFeedback]);
  }

  const deleteComment = (index) => {
    setComments(comments.filter((value, i) => i !== index));
  }

  return (
    <div className='App'>
      <Reviews comments={comments} clickDeleteBtnt={deleteComment}/>
      <Feedback sendFeedback={addFeedback}/>
    </div>
  );
}

export default App;
