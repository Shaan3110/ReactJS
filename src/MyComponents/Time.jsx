import React,{useState} from 'react'
import './stylesheets/Time.css'
export default function Time() {

    setInterval(() => {
        let t;
        t=new Date().toLocaleTimeString();
        setTime(t)
    }, 1000)
    let [cTime,setTime] = useState(0);
    return (
        <>
        <h1>{cTime}</h1>
        </>
    )
}
