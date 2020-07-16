import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Board from './components/Board.jsx';
import Form from './components/Form.jsx';


const App = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isForm, setIsForm] = useState(true);
  const [username, setUsername] = useState('');

  const handleSubmit = value => fetch(`/api/validate/${value}`)
    .then(response => response.json())
    .then(obj => obj.isValid ? validInput(value) : invalidInput());


  const validInput = username => {
    setUsername(username);
    setIsForm(false);
  }

  const invalidInput = () => {
    setIsInvalid(true);
    setTimeout(() => setIsInvalid(false), 1000);
  }

  const handleBack = () => {
    setIsForm(true);
    setUsername('');
  }

  if (isForm) return <Form isInvalid={isInvalid} onSubmit={handleSubmit} />

  return (
    <div className="App">
      <Header onBack={handleBack} username={username} />
      <Board username={username} />
    </div>
  );

}

export default App;
