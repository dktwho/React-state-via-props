import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  console.log('app')
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Counter count={count}/>
      <Button incr={increment}/>
      <Button incr={increment} />
      <Button incr={increment} />
     
    </div>
  );
}

export default App;
