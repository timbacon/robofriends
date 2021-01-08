import React, {useState} from 'react';

interface IProps {
  color?: string
}

const CounterButton = ({color}: IProps) => {
  const [count, setCount] = useState(0)

  return (
    <button
        id='counter'
        color={color}
        // count={count}
        onClick={() => setCount(count => count + 1)}>
        Count: {count}
      </button>
  )
}

export default CounterButton