import React,{useState} from 'react'

const Accordian = ({question,answer}) => {
    let [Show, setShow] = useState(false);
    let plus="➕";
    let minus="➖";
    let [icon, seticon] = useState(plus)
    // console.log(props);
    return (
        <>
            <div className="main-heading">
                <p onClick={() => {setShow(!Show); (icon===plus)?seticon(minus):seticon(plus);}}>{icon}</p>
                <h3>{question}</h3>
            </div>
            {Show && <p className="answers">{answer}</p>}
        </>
    )
}
export default Accordian

