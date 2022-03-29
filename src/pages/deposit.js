
import React, {useState} from 'react';


function Deposit() {
  const [count, updateCounter] = useState(0);
  
  return (
    <div>
      <h1> Deposit: {count}</h1>
      <button onClick={ () => updateCounter(count + 1) }>Increase</button>
      <button onClick={ () => updateCounter(count - 1) }>Decrease</button>
    </div>
  )
}

export default Deposit;
