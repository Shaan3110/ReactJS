import React,{useState} from 'react'
import './stylesheets/Incredecre.css'
const Incredecre = () => {
    const [Num, setNum] = useState(0);
    const Increment = () =>{
        let a=Num;
        a=a+1;
        setNum(a);
    }
    const Decrement = () =>{
        let a=Num;
        a=a-1;
        if(a>-1)
            setNum(a);
        else
            alert("The number can't be decremented anymore!");
    }
    
    return (
        <div className="maincontainer">
            <h1>{Num}</h1>
            <div className="buttons">
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Incredecre
