import { useState } from 'react';

interface Props {
  click: (num: number) => void;
  counts: number;
}

const Counter = ({ click, counts }: Props) => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
    click(count - 1);
  };
  return (
    <div className='mb-2'>
      <span className='bg-warning p-2'>{count ? count : 'Zero'}</span>
      <button
        onClick={() => {
          
          click(count + 1);
        }}
        className='btn btn-success'
      >
        +
      </button>
      <button onClick={decrement} className='btn btn-danger'>
        -
      </button>
    </div>
  );
};

export default Counter;
