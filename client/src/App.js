import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Board from './components/Board.jsx';
import Form from './components/Form.jsx';


const App = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isForm, setIsForm] = useState(true);
  const [username, setUsername] = useState('');

  const handleSubmit = value => {
    fetch(`https://api.github.com/users/${value}`)
      .then(user => user.json())
      .then(user => {
        if (user.id) {
          setUsername(value);
          setIsForm(false);
        }
        else {
          setIsInvalid(true);
          setTimeout(() => setIsInvalid(false), 1000);
        }
      })
  }

  if (isForm) return <Form isInvalid={isInvalid} onSubmit={handleSubmit} />

  return (
    <div className="App">
      <Header username={username} />
      <Board username={username} />
    </div>
  );

}

export default App;
