import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: "안녕하세요! 테스트 메시지에요. 어떻게 도와드릴까요?" }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>AI Query Interface</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="4"
          cols="50"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
