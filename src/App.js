import React, {useState} from 'react';
import data from './data';
import './Birthday.css';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>... Birthday Today</h3>
        <button>Clear All</button>
      </section>
    </main>
  );
}

export default App;
