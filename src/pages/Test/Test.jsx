import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/features/counterSlice'

const Test = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='p-20'>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    );
};

export default Test;