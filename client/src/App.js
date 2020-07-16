import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Board from './components/Board.jsx';
import Form from './components/Form.jsx';


const App = () => {

  const [isForm, setIsForm] = useState(true);
  const [username, setUsername] = useState('');

  const handleSubmit = value => {
    setUsername(value);
    setIsForm(false);
  }

  if (isForm) return <Form onSubmit={handleSubmit} />

  return (
    <div className="App">
      <Header username={username} />
      <Board username={username} />
    </div>
  );

}

export default App;
