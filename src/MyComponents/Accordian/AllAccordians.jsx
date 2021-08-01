import React, { useState } from 'react'
import { questions } from './Data.js'
import '../stylesheets/Accordians-stylesheets/AllAccordians.css'
import Accordian from './Accordian'

export const AllAccordians = () => {
    const [Data, setData] = useState(questions);
    return (
        <>
            <section className="main-div">
                <h1>React Interview Questions</h1>
                {
                    Data.map((ele) => {
                        // const {id}=ele;
                        return <Accordian key={ele.id} {...ele} />
                    })
                }
            </section>
        </>
    )
}
