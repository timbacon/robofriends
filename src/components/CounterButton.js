import React, {useState} from 'react';

const CounterButton = ({color}) => {
  const [count, setCount] = useState(0)

  return (
    <button
        id='counter'
        color={color}
        count={count}
        onClick={() => setCount(count => count + 1)}>
        Count: {count}
      </button>
  )
}

export default CounterButton