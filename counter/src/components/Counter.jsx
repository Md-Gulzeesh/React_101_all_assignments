import React, { useState} from 'react'
const Counter = ({initialValue}) => {
    const [count,setCount] = useState(initialValue);
  return (
    <div>
        <h1>Counter App : {count}</h1>
        <button onClick={() =>setCount(count+1)}>Increment</button>
        <button onClick={()=> {
            if(count>0){
                setCount(count-1);
                }}}>Decrement</button>
            <button onClick={() =>setCount(count*2)}>Double</button>
    </div>
  )
}

export default Counter