import React ,{useState} from 'react'
import './stylesheets/Click.css'

const Click=()=>{
    let [count,setCount] = useState(0)
    const Inc=()=>{
        count=count+1;
        setCount(count);
    }
    return(
    <>
    <div className="clicked">{count}</div>
    <button onClick={Inc}>Click Me</button>
    </>
    );
}

export default Click