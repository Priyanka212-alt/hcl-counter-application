
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Get initial count from backend
  useEffect(() => {
    fetch('http://localhost:5000/count')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(error => console.log(error));
  }, []);

  // Send request to backend
  const updateCounter = async (action) => {
    const response = await fetch(
      `http://localhost:5000/${action}`,
      { method: 'POST' }
    );

    const data = await response.json();
    setCount(data.count);
  };

  return (
    <div className="container">
      <h1>My Counter Application</h1>

      <h2>{count}</h2>

      <button onClick={() => updateCounter('increment')}>
        Increment (+)
      </button>

      <button onClick={() => updateCounter('decrement')}>
        Decrement (-)
      </button>

      <button onClick={() => updateCounter('reset')}>
        Reset
      </button>

      <p>Frontend connected to Backend!</p>
    </div>
  );
}

export default App;
