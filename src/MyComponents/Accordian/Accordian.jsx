import React from 'react'

const Accordian = ({question,answer}) => {
    // console.log(props);
    return (
        <>
            <div className="main-heading">
                <p>➕</p>
                <h3>{question}</h3>
            </div>
            <p className="answers">{answer}</p>
        </>
    )
}
export default Accordian

